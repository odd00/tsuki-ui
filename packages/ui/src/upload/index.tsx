import React, { FC, useRef, ChangeEvent, useState } from 'react';
import UploadList from './upload-list';
import Dragger from './dragger';
import clsx from 'clsx';
import { UploadFile, UploadProps, UploadFileStatus } from './interface';

export type { UploadFileStatus, UploadFile, UploadProps };

const prefixCls = 'tsuki-upload';

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
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
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList((prevList) => {
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
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
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
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList((prevList) => {
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
          updateFileList(_file, { percent: percentage, status: 'uploading' });
          if (onProgress) {
            onProgress(percentage, _file);
          }
        }
      }
    };

    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300) {
        updateFileList(_file, { status: 'error', error: xhr.response });
        if (onError) {
          onError(xhr.response, _file);
        }
        if (onChange) {
          onChange({ ..._file, status: 'error', error: xhr.response });
        }
      } else {
        updateFileList(_file, { status: 'success', response: xhr.response, percent: 100 });
        if (onSuccess) {
          onSuccess(xhr.response, _file);
        }
        if (onChange) {
          onChange({ ..._file, status: 'success', response: xhr.response });
        }
      }
    };

    xhr.onerror = function (e) {
      updateFileList(_file, { status: 'error', error: xhr.response });
      if (onError) {
        onError(xhr.response, _file);
      }
      if (onChange) {
        onChange({ ..._file, status: 'error', error: xhr.response });
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

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
