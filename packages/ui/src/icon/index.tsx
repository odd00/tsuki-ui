import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export enum ThemeType {
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
}

export interface IconProps extends FontAwesomeIconProps {
  /** 图标主题色 */
  theme?: ThemeType;
  /** 自定义类名 */
  className?: string;
}

const prefixCls = 'tsuki-icon';

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
