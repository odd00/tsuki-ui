import React from 'react';
import Icon, { ThemeType } from '../';
import '../style';
import {
  faCoffee,
  faCheck,
  faSpinner,
  faTimes,
  faExclamationTriangle,
  faInfoCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export default () => (
  <>
    <div>
      <h3>基础图标</h3>
      <Icon icon={faCoffee} style={{ marginRight: 12 }} />
      <Icon icon={faCheck} style={{ marginRight: 12 }} />
      <Icon icon={faTimes} style={{ marginRight: 12 }} />
      <Icon icon={faExclamationTriangle} style={{ marginRight: 12 }} />
      <Icon icon={faInfoCircle} style={{ marginRight: 12 }} />
      <Icon icon={faArrowRight} />
    </div>

    <div style={{ marginTop: 20 }}>
      <h3>主题色</h3>
      <Icon icon={faCheck} theme={ThemeType.Primary} style={{ marginRight: 12 }} />
      <Icon icon={faCheck} theme={ThemeType.Success} style={{ marginRight: 12 }} />
      <Icon icon={faExclamationTriangle} theme={ThemeType.Warning} style={{ marginRight: 12 }} />
      <Icon icon={faTimes} theme={ThemeType.Danger} style={{ marginRight: 12 }} />
      <Icon icon={faInfoCircle} theme={ThemeType.Info} />
    </div>

    <div style={{ marginTop: 20 }}>
      <h3>图标大小</h3>
      <Icon icon={faCoffee} size="xs" style={{ marginRight: 12 }} />
      <Icon icon={faCoffee} size="sm" style={{ marginRight: 12 }} />
      <Icon icon={faCoffee} size="lg" style={{ marginRight: 12 }} />
      <Icon icon={faCoffee} size="2x" style={{ marginRight: 12 }} />
      <Icon icon={faCoffee} size="3x" />
    </div>

    <div style={{ marginTop: 20 }}>
      <h3>动画效果</h3>
      <Icon icon={faSpinner} spin size="2x" style={{ marginRight: 12 }} />
      <Icon icon={faSpinner} pulse size="2x" />
    </div>
  </>
);
