---
title: Icon 图标
group:
  title: 通用
  order: 1
nav:
  title: 组件
  path: /components
---

# Icon 图标

基于 react-fontawesome 封装的图标组件，提供语义化的主题色和统一的使用方式。

## 何时使用

需要使用图标表达含义或辅助操作时。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

## API

Icon 组件继承了 `FontAwesomeIconProps` 的所有属性（如 `icon`、`size`、`spin`、`pulse`、`className` 等），以下为扩展属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题色 | `ThemeType` 枚举：`Primary` \| `Success` \| `Warning` \| `Danger` \| `Info` | - |

### 常用继承属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标类型（FontAwesome 图标对象） | `IconProp` | -（必填） |
| size | 图标大小 | `'xs'` \| `'sm'` \| `'lg'` \| `'2x'` \| `'3x'` \| ... | - |
| spin | 是否旋转 | `boolean` | `false` |
| pulse | 是否脉冲旋转 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |

### 图标选择

本组件使用 `@fortawesome/free-solid-svg-icons`，可用图标请参考 [Font Awesome 图标库](https://fontawesome.com/icons?d=gallery&s=solid&m=free)。

使用时按需引入：

```tsx | pure
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'tsuki-ui';

<Icon icon={faCoffee} theme="primary" />;
```
