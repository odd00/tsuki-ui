"use strict";(self.webpackChunktsuki_ui_docs=self.webpackChunktsuki_ui_docs||[]).push([[922],{86867:function(a,n,e){e.r(n),e.d(n,{demos:function(){return d}});var r=e(44194),d={"alert-demo-basic":{component:r.memo(r.lazy(function(){return e.e(819).then(e.bind(e,66382))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(54505).Z},react:{type:"NPM",value:"18.3.1"},"../style.ts":{type:"FILE",value:e(50822).Z},"...tsx":{type:"FILE",value:e(79064).Z},"./index.less":{type:"FILE",value:e(94623).Z},"prop-types":{type:"NPM",value:"15.8.1"},clsx:{type:"NPM",value:"2.1.1"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},41636:function(a,n,e){e.r(n),e.d(n,{demos:function(){return d}});var r=e(44194),d={}},95435:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"kind",paraId:1,tocIndex:3},{value:"\u8B66\u544A\u7C7B\u578B",paraId:1,tocIndex:3},{value:"'info'/'positive'/'negative'/'warning'\u975E\u5FC5\u586B",paraId:1,tocIndex:3},{value:"'info'",paraId:1,tocIndex:3}]},10341:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"btnType",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B",paraId:2,tocIndex:4},{value:"primary",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"danger",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"link",paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"size",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F",paraId:2,tocIndex:4},{value:"lg",paraId:2,tocIndex:4},{value:" | ",paraId:2,tocIndex:4},{value:"sm",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"disabled",paraId:2,tocIndex:4},{value:"\u6309\u94AE\u5931\u6548\u72B6\u6001",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"href",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u8DF3\u8F6C\u7684\u5730\u5740\uFF0C\u6307\u5B9A\u6B64\u5C5E\u6027 button \u7684\u884C\u4E3A\u548C a \u94FE\u63A5\u4E00\u81F4",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"className",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"children",paraId:2,tocIndex:4},{value:"\u6309\u94AE\u5185\u5BB9",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},54505:function(a,n){n.Z=`import React from 'react';\r
import Alert from '../';\r
import '../style';\r
\r
export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;\r
`},79064:function(a,n){n.Z=`import React from 'react';\r
import t from 'prop-types';\r
import clsx from 'clsx';\r
\r
export interface AlertProps {\r
  /**\r
   * @description       Alert \u7684\u7C7B\u578B\r
   * @default           'info'\r
   */\r
  kind?: 'info' | 'positive' | 'negative' | 'warning';\r
  children?: React.ReactNode;\r
  className?: string; // Add className prop\r
  style?: React.CSSProperties; // Add style prop\r
}\r
\r
const prefixCls = 'tsuki-alert';\r
\r
const Alert: React.FC<AlertProps> = ({ children, kind = 'info', className, ...rest }) => (\r
  <div className={clsx(prefixCls, \`\${prefixCls}-\${kind}\`, className)} {...rest}>\r
    {children}\r
  </div>\r
);\r
\r
Alert.propTypes = {\r
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r
};\r
\r
export default Alert;\r
`},94623:function(a,n){n.Z=`@import '../../style/variables.less';\r
\r
@alert-prefix-cls: ~'@{tsuki-prefix}-alert';\r
\r
.@{alert-prefix-cls} {\r
  padding: 20px;\r
  background: white;\r
  border-radius: @border-radius-base;\r
  color: @white;\r
\r
  &-info {\r
    background-color: @info-color;\r
  }\r
  &-positive {\r
    background-color: @success-color;\r
  }\r
  &-negative {\r
    background-color: @error-color;\r
  }\r
  &-warning {\r
    background-color: @warning-color;\r
  }\r
}\r
`},50822:function(a,n){n.Z=`import './index.less';\r
`}}]);
