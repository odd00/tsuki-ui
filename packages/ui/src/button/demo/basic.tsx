import React from 'react';
import Button, { ButtonType, ButtonSize } from '../';
import '../style';

export default () => (
  <>
    <div>
      <h3>Button Type</h3>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link} href="https://google.com">
        Link
      </Button>
    </div>

    <div style={{ marginTop: 20 }}>
      <h3>Button Size</h3>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button>Default</Button>
      <Button size={ButtonSize.Small}>Small</Button>
    </div>

    <div style={{ marginTop: 20 }}>
      <h3>Disabled Button</h3>
      <Button disabled>Disabled Default</Button>
      <Button btnType={ButtonType.Primary} disabled>
        Disabled Primary
      </Button>
      <Button btnType={ButtonType.Link} href="https://google.com" disabled>
        Disabled Link
      </Button>
    </div>
  </>
);
