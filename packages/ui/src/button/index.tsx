import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const prefixCls = 'tsuki-btn';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled = false,
    size,
    btnType = ButtonType.Default,
    children,
    href,
    ...restProps
  } = props;
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${btnType}`]: btnType,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
