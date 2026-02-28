---
title: AutoComplete 自动补全
group:
  title: 数据录入
  order: 3
nav:
  title: 组件
  path: /components
---

# AutoComplete 自动补全

输入框自动补全功能，支持同步 / 异步数据源、键盘导航、自定义渲染模板。

## 何时使用

- 需要根据用户输入内容实时提供补全建议时。
- 需要远程搜索并展示结果供用户选择时。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fetchSuggestions | 返回输入建议的方法，支持同步数组或异步 Promise | `(str: string) => DataSourceObject[] \| Promise<DataSourceObject[]>` | - |
| onSelect | 点击选中建议项时触发的回调 | `(item: DataSourceObject) => void` | - |
| onChange | 文本框发生改变的时候触发的事件 | `(value: string) => void` | - |
| renderOption | 支持自定义渲染下拉项，返回 ReactElement | `(item: DataSourceObject) => ReactElement` | - |
| size | 设置 input 大小，支持 lg 或者是 sm | `'lg'` \| `'sm'` | - |
| disabled | 是否禁用 Input | `boolean` | `false` |
| icon | 添加图标，在右侧悬浮添加一个图标，用于提示 | `IconProp` | - |
| prepend | 添加前缀，用于配置一些固定组合 | `string \| ReactElement` | - |
| append | 添加后缀，用于配置一些固定组合 | `string \| ReactElement` | - |

### DataSourceObject

| 属性  | 说明         | 类型     |
| ----- | ------------ | -------- |
| value | 建议项的文本 | `string` |

> `DataSourceType<T> = T & DataSourceObject`，支持传入自定义字段。

## 功能特性

- **防抖搜索**：输入 300ms 后才触发 `fetchSuggestions`，减少请求次数
- **键盘导航**：↑ / ↓ 选择建议项，Enter 确认，Esc 关闭
- **点击外部关闭**：点击组件外部自动收起下拉列表
- **自定义模板**：通过 `renderOption` 自定义建议项渲染
- **高亮匹配**：默认模板自动高亮匹配的文本片段
- **异步加载**：支持 `Promise` 返回值，加载时显示 loading 图标
