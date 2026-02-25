"use strict";(self.webpackChunktsuki_ui_docs=self.webpackChunktsuki_ui_docs||[]).push([[390],{58836:function(t,n,e){e.r(n),e.d(n,{demos:function(){return a}});var o=e(44194),a={"alert-demo-basic":{component:o.memo(o.lazy(function(){return e.e(819).then(e.bind(e,54435))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(37815).Z},react:{type:"NPM",value:"18.3.1"},"../style.ts":{type:"FILE",value:e(71640).Z},"...tsx":{type:"FILE",value:e(56987).Z},"prop-types":{type:"NPM",value:"15.8.1"},"./index.less":{type:"FILE",value:e(21948).Z},clsx:{type:"NPM",value:"2.1.1"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},81446:function(t,n,e){e.r(n),e.d(n,{demos:function(){return a}});var o=e(44194),a={"button-demo-basic":{component:o.memo(o.lazy(function(){return e.e(219).then(e.bind(e,15976))})),asset:{type:"BLOCK",id:"button-demo-basic",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:e(16351).Z},react:{type:"NPM",value:"18.3.1"},"../style.ts":{type:"FILE",value:e(62303).Z},"...tsx":{type:"FILE",value:e(72270).Z},clsx:{type:"NPM",value:"2.1.1"},"./index.less":{type:"FILE",value:e(47475).Z}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},89326:function(t,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"kind",paraId:1,tocIndex:3},{value:"\u8B66\u544A\u7C7B\u578B",paraId:1,tocIndex:3},{value:"'info'/'positive'/'negative'/'warning'\u975E\u5FC5\u586B",paraId:1,tocIndex:3},{value:"'info'",paraId:1,tocIndex:3}]},40918:function(t,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"btnType",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B",paraId:2,tocIndex:4},{value:"primary",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"danger",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"link",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"size",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F",paraId:2,tocIndex:4},{value:"lg",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"sm",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"disabled",paraId:2,tocIndex:4},{value:"\u6309\u94AE\u5931\u6548\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"href",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u8DF3\u8F6C\u7684\u5730\u5740\uFF0C\u6307\u5B9A\u6B64\u5C5E\u6027 button \u7684\u884C\u4E3A\u548C a \u94FE\u63A5\u4E00\u81F4",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"className",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"children",paraId:2,tocIndex:4},{value:"\u6309\u94AE\u5185\u5BB9",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},37815:function(t,n){n.Z=`import React from 'react';
import Alert from '../';
import '../style';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;
`},56987:function(t,n){n.Z=`import React from 'react';
import t from 'prop-types';
import clsx from 'clsx';

export interface AlertProps {
  /**
   * @description       Alert \u7684\u7C7B\u578B
   * @default           'info'
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
  children?: React.ReactNode;
  className?: string; // Add className prop
  style?: React.CSSProperties; // Add style prop
}

const prefixCls = 'tsuki-alert';

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', className, ...rest }) => (
  <div className={clsx(prefixCls, \`\${prefixCls}-\${kind}\`, className)} {...rest}>
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
`},21948:function(t,n){n.Z=`@import '../../style/variables.less';
@import '../../style/mixins.less';

@alert-prefix-cls: ~'@{tsuki-prefix}-alert';

.@{alert-prefix-cls} {
  .reset-component();
  padding: 20px;
  background: white;
  border-radius: @border-radius-base;
  color: @white;

  &-info {
    background-color: @info-color;
  }
  &-positive {
    background-color: @success-color;
  }
  &-negative {
    background-color: @error-color;
  }
  &-warning {
    background-color: @warning-color;
  }
}
`},71640:function(t,n){n.Z=`import './index.less';
`},16351:function(t,n){n.Z=`import React from 'react';
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
`},72270:function(t,n){n.Z=`import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
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
    [\`\${prefixCls}-\${size}\`]: size,
    [\`\${prefixCls}-\${btnType}\`]: btnType,
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
`},47475:function(t,n){n.Z=`@import '../../style/variables.less';
@import '../../style/mixins.less';

@btn-prefix-cls: ~'@{tsuki-prefix}-btn';

.@{btn-prefix-cls} {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  .transition();
  user-select: none;
  touch-action: manipulation;
  .btn-size(32px, 4px 15px, @font-size-base);
  color: rgba(0, 0, 0, 0.85); // Default color
  background-color: @white; // Default background
  border-color: #d9d9d9; // Default border

  &:focus,
  &:hover {
    color: @primary-color;
    border-color: @primary-color;
    background-color: @white;
  }

  &:active {
    color: darken(@primary-color, 10%);
    border-color: darken(@primary-color, 10%);
    background: @white;
  }

  &[disabled] {
    .btn-disabled();
  }

  &-primary {
    .btn-solid-variant(@primary-color);
  }

  &-danger {
    .btn-solid-variant(@error-color);
  }

  &-link {
    color: @primary-color;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover,
    &:focus {
      color: lighten(@primary-color, 10%);
      border-color: transparent;
      background: transparent;
    }

    &:active {
      color: darken(@primary-color, 10%);
      border-color: transparent;
      background: transparent;
    }

    &.disabled,
    &[disabled] {
      color: rgba(0, 0, 0, 0.25);
      background-color: transparent;
      border-color: transparent;
    }
  }

  &-lg {
    .btn-size(40px, 6.4px 15px, 16px);
  }

  &-sm {
    .btn-size(24px, 0 7px, 14px);
  }
}
`},62303:function(t,n){n.Z=`import './index.less';
`}}]);
