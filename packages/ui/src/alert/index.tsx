import React from 'react';
import t from 'prop-types';
import clsx from 'clsx';

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
  children?: React.ReactNode;
  className?: string; // Add className prop
  style?: React.CSSProperties; // Add style prop
}

const prefixCls = 'tsuki-alert';

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', className, ...rest }) => (
  <div className={clsx(prefixCls, `${prefixCls}-${kind}`, className)} {...rest}>
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
