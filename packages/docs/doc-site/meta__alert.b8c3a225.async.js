(self.webpackChunktsuki_ui=self.webpackChunktsuki_ui||[]).push([[761],{54444:function(t,n,e){"use strict";var s;e.r(n),e.d(n,{demos:function(){return E}});var u=e(15009),r=e.n(u),i=e(99289),o=e.n(i),_=e(67294),d=e(86169),l=e(70208),m=e(27386),c=e(45697),P=e.n(c),E={"alert-demo-basic":{component:_.memo(_.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"19.2.4"},"../style.ts":{type:"FILE",value:e(82441).Z},"...tsx":{type:"FILE",value:e(59695).Z},"./index.less":{type:"FILE",value:e(33936).Z},"prop-types":{type:"NPM",value:"15.8.1"}},entry:"index.tsx"},context:{"../style.ts":d,"...tsx":l,"./index.less":m,react:s||(s=e.t(_,2)),"D:/frontend/tsuki-ui/src/alert/style/index.ts":d,"D:/frontend/tsuki-ui/src/alert/index.tsx":l,"D:/frontend/tsuki-ui/src/alert/style/index.less":m,"prop-types":c},renderOpts:{compile:function(){var O=o()(r()().mark(function v(){var f,D=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(862).then(e.bind(e,16862));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,D));case 3:case"end":return a.stop()}},v)}));function p(){return O.apply(this,arguments)}return p}()}}}},70208:function(t,n,e){"use strict";e.r(n);var s=e(97857),u=e.n(s),r=e(13769),i=e.n(r),o=e(67294),_=e(45697),d=e.n(_),l=e(85893),m=["children","kind"],c="happy-alert",P={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},E=function(p){var v=p.children,f=p.kind,D=f===void 0?"info":f,M=i()(p,m);return(0,l.jsx)("div",u()(u()({className:c,style:{background:P[D]}},M),{},{children:v}))};E.propTypes={kind:d().oneOf(["info","positive","negative","warning"])},n.default=E},86169:function(t,n,e){"use strict";e.r(n);var s=e(27386)},27386:function(t,n,e){"use strict";e.r(n)},5504:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(t,n){"use strict";n.Z=`import React from 'react';\r
import Alert from '../';\r
import '../style';\r
\r
export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;\r
`},59695:function(t,n){"use strict";n.Z=`import React from 'react';\r
import t from 'prop-types';\r
\r
export interface AlertProps {\r
  /**\r
   * @description       Alert \u7684\u7C7B\u578B\r
   * @default           'info'\r
   */\r
  kind?: 'info' | 'positive' | 'negative' | 'warning';\r
  children?: React.ReactNode;\r
}\r
\r
export type KindMap = Record<Required<AlertProps>['kind'], string>;\r
\r
const prefixCls = 'happy-alert';\r
\r
const kinds: KindMap = {\r
  info: '#5352ED',\r
  positive: '#2ED573',\r
  negative: '#FF4757',\r
  warning: '#FFA502',\r
};\r
\r
const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\r
  <div\r
    className={prefixCls}\r
    style={{\r
      background: kinds[kind],\r
    }}\r
    {...rest}\r
  >\r
    {children}\r
  </div>\r
);\r
\r
Alert.propTypes = {\r
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r
};\r
\r
export default Alert;\r
`},33936:function(t,n){"use strict";n.Z=`@popupPrefix: happy-alert;\r
\r
.@{popupPrefix} {\r
  padding: 20px;\r
  background: white;\r
  border-radius: 3px;\r
  color: white;\r
}\r
`},82441:function(t,n){"use strict";n.Z=`import './index.less';\r
`},13769:function(t,n,e){var s=e(48541);function u(r,i){if(r==null)return{};var o=s(r,i),_,d;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(d=0;d<l.length;d++)_=l[d],!(i.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(r,_)&&(o[_]=r[_])}return o}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},48541:function(t){function n(e,s){if(e==null)return{};var u={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(s.indexOf(i)>=0)&&(u[i]=e[i]);return u}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
