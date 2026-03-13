import React from 'react';
import Upload from '../index';
import Icon, { ThemeType } from '../../icon';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

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
      multiple
      drag
    >
      <Icon icon={faUpload} size="5x" theme={ThemeType.Primary} />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
}
