import React from 'react';
import Upload from '../index';
import Button, { ButtonType } from '../../button';

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('File larger than 50KB');
    return false;
  }
  return true;
};

// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_name.docx', { type: file.type })
//   return Promise.resolve(newFile)
// }

export default function () {
  return (
    <Upload
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      onChange={() => {
        console.log('uploaded');
      }}
      onRemove={(file) => {
        console.log('removed', file);
      }}
      name="fileName"
      data={{ key: 'value' }}
      headers={{ 'X-Powered-By': 'tsuki-ui' }}
      accept=".jpg"
      multiple
      beforeUpload={checkFileSize}
    >
      <Button btnType={ButtonType.Primary}>Upload File</Button>
    </Upload>
  );
}
