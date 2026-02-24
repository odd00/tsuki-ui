---
title: Button 按钮
group:
  title: 通用
  order: 1
nav:
  title: 组件
  path: /components
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| btnType | 设置按钮类型 | `primary` \| `default` \| `danger` \| `link` | `default` |
| size | 设置按钮大小 | `lg` \| `sm` | - |
| disabled | 按钮失效状态 | `boolean` | `false` |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | `string` | - |
| className | 自定义类名 | `string` | - |
| children | 按钮内容 | `ReactNode` | - |
