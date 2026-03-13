import React, { FC } from 'react';
import { UploadFile } from './interface';
import Icon, { ThemeType } from '../icon';
import {
  faFileAlt,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="tsuki-upload-list">
      {fileList.map((item) => {
        return (
          <li className="tsuki-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon={faFileAlt} theme={ThemeType.Primary} />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && (
                <Icon icon={faSpinner} spin theme={ThemeType.Primary} />
              )}
              {item.status === 'success' && <Icon icon={faCheckCircle} theme={ThemeType.Success} />}
              {item.status === 'error' && <Icon icon={faTimesCircle} theme={ThemeType.Danger} />}
            </span>
            <span className="file-actions">
              <Icon icon={faTimes} onClick={() => onRemove(item)} />
            </span>
            {item.status === 'uploading' && (
              <div className="tsuki-upload-progress-bar">
                <div
                  className="tsuki-upload-progress-bar-inner"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
