import React, { FC, useRef, ChangeEvent, useState, useEffect } from 'react';
import UploadList from './upload-list';
import Dragger from './dragger';
import clsx from 'clsx';
import { UploadFile, UploadProps, UploadFileStatus } from './interface';

export type { UploadFileStatus, UploadFile, UploadProps };

const prefixCls = 'tsuki-upload';

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    fileList: controlledFileList,
    defaultFileList,
    maxCount,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onFileListChange,
    onRemove,
    name = 'file',
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
  } = props;

  const fileInput = useRef<HTMLInputElement>(null);
  const isControlled = controlledFileList !== undefined;
  const [innerFileList, setInnerFileList] = useState<UploadFile[]>(defaultFileList || []);
  const mergedFileList = isControlled ? controlledFileList : innerFileList;
  const fileListRef = useRef<UploadFile[]>(mergedFileList || []);

  useEffect(() => {
    fileListRef.current = mergedFileList || [];
  }, [mergedFileList]);

  const applyFileListChange = (updater: (prevList: UploadFile[]) => UploadFile[]) => {
    const nextList = updater(fileListRef.current);
    fileListRef.current = nextList;
    if (!isControlled) {
      setInnerFileList(nextList);
    }
    if (onFileListChange) {
      onFileListChange(nextList);
    }
    return nextList;
  };

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    return applyFileListChange((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  const handleRemove = (file: UploadFile) => {
    applyFileListChange((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    if (typeof maxCount === 'number') {
      const remainCount = maxCount - fileListRef.current.length;
      if (remainCount <= 0) {
        return;
      }
      postFiles = postFiles.slice(0, remainCount);
    }

    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };

  const post = (file: File) => {
    if (typeof maxCount === 'number' && fileListRef.current.length >= maxCount) {
      return;
    }

    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    applyFileListChange((prevList) => {
      return [_file, ...prevList];
    });
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    const xhr = new XMLHttpRequest();

    xhr.open('POST', action, true);

    if (withCredentials) {
      xhr.withCredentials = true;
    }

    if (headers) {
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }

    xhr.upload.onprogress = (e: ProgressEvent) => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        if (percentage < 100) {
          const nextList = updateFileList(_file, { percent: percentage, status: 'uploading' });
          const nextFile = nextList.find((item) => item.uid === _file.uid) || {
            ..._file,
            percent: percentage,
            status: 'uploading' as UploadFileStatus,
          };
          if (onProgress) {
            onProgress(percentage, nextFile);
          }
        }
      }
    };

    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300) {
        const nextList = updateFileList(_file, { status: 'error', error: xhr.response });
        const nextFile = nextList.find((item) => item.uid === _file.uid) || {
          ..._file,
          status: 'error' as UploadFileStatus,
          error: xhr.response,
        };
        if (onError) {
          onError(xhr.response, nextFile);
        }
        if (onChange) {
          onChange(nextFile, nextList);
        }
      } else {
        const nextList = updateFileList(_file, {
          status: 'success',
          response: xhr.response,
          percent: 100,
        });
        const nextFile = nextList.find((item) => item.uid === _file.uid) || {
          ..._file,
          status: 'success' as UploadFileStatus,
          response: xhr.response,
          percent: 100,
        };
        if (onSuccess) {
          onSuccess(xhr.response, nextFile);
        }
        if (onChange) {
          onChange(nextFile, nextList);
        }
      }
    };

    xhr.onerror = function (e) {
      const nextList = updateFileList(_file, { status: 'error', error: xhr.response });
      const nextFile = nextList.find((item) => item.uid === _file.uid) || {
        ..._file,
        status: 'error' as UploadFileStatus,
        error: xhr.response,
      };
      if (onError) {
        onError(xhr.response, nextFile);
      }
      if (onChange) {
        onChange(nextFile, nextList);
      }
    };

    xhr.send(formData);
  };

  return (
    <div className={prefixCls}>
      <div className={clsx(`${prefixCls}-input`, { 'is-drag': drag })} onClick={handleClick}>
        {drag ? (
          <Dragger
            onFile={(files: FileList) => {
              uploadFiles(files);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          className={`${prefixCls}-file-input`}
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={mergedFileList || []} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
