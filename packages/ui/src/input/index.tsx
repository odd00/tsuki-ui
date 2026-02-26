import React, { InputHTMLAttributes, ReactElement, forwardRef } from 'react';
import clsx from 'clsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../icon';

export type InputSize = 'lg' | 'sm';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /**
   * @description 是否禁用 Input
   */
  disabled?: boolean;
  /**
   * @description 设置 input 大小，支持 lg 或者是 sm
   */
  size?: InputSize;
  /**
   * @description 添加图标，在右侧悬浮添加一个图标，用于提示
   */
  icon?: IconProp;
  /**
   * @description 添加前缀 用于配置一些固定组合
   */
  prepend?: string | ReactElement;
  /**
   * @description 添加后缀 用于配置一些固定组合
   */
  append?: string | ReactElement;
  /**
   * @description 受控模式下的值
   */
  value?: string;
  /**
   * @description 非受控模式下的默认值
   */
  defaultValue?: string;
  /**
   * @description 输入变化时的回调
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const prefixCls = 'tsuki-input';

/**
 * Input 输入框组件，支持受控和非受控两种使用方式。
 *
 * 受控模式：传入 value + onChange，由外部完全控制输入值
 * 非受控模式：传入 defaultValue（或不传），由原生 input 自行管理值，通过 ref 获取
 */
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled = false,
    size,
    icon,
    prepend,
    append,
    onChange,
    style,
    ...restProps // value / defaultValue 保留在 restProps 中直接透传给原生 input
  } = props;

  const wrapperClasses = clsx(`${prefixCls}-wrapper`, className, {
    [`${prefixCls}-wrapper-${size}`]: size,
    [`${prefixCls}-wrapper-disabled`]: disabled,
    [`${prefixCls}-wrapper-with-prepend`]: prepend,
    [`${prefixCls}-wrapper-with-append`]: append,
  });

  const inputClasses = clsx(prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-with-icon`]: icon,
  });

  return (
    <div className={wrapperClasses} style={style}>
      {/* 前缀 */}
      {prepend && <div className={`${prefixCls}-prepend`}>{prepend}</div>}

      {/* 输入框容器 */}
      <div className={`${prefixCls}-inner-wrapper`}>
        <input
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          onChange={onChange}
          {...restProps}
        />
        {/* 图标 */}
        {icon && (
          <span className={`${prefixCls}-icon`}>
            <Icon icon={icon} />
          </span>
        )}
      </div>

      {/* 后缀 */}
      {append && <div className={`${prefixCls}-append`}>{append}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
