---
title: Input 输入框
group:
  title: 数据录入
  order: 3
nav:
  title: 组件
  path: /components
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位文本 | `string` | - |
| disabled | 是否禁用 Input | `boolean` | `false` |
| size | 设置 input 大小，支持 lg 或者是 sm | `'lg'` \| `'sm'` | - |
| icon | 添加图标，在右侧悬浮添加一个图标，用于提示 | `IconProp` | - |
| prepend | 添加前缀，用于配置一些固定组合 | `string \| ReactElement` | - |
| append | 添加后缀，用于配置一些固定组合 | `string \| ReactElement` | - |
| value | 受控模式下的输入值 | `string` | - |
| defaultValue | 非受控模式下的默认值 | `string` | - |
| onChange | 输入内容变化时的回调 | `(e: ChangeEvent<HTMLInputElement>) => void` | - |
