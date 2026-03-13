---
title: Upload 上传
group:
  title: 数据录入
  order: 2
nav:
  title: 组件
  path: /components
---

# Upload 上传

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 拖拽上传

<code src="./demo/drag.tsx"></code>

## API

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| action | 必选参数，上传的地址 | - | string |
| defaultFileList | 上传的文件列表 | - | `UploadFile[]` |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 | - | `(file: File) => boolean \| Promise<File>` |
| onProgress | 文件上传时的钩子 | - | `(percentage: number, file: UploadFile) => void` |
| onSuccess | 文件上传成功时的钩子 | - | `(data: any, file: UploadFile) => void` |
| onError | 文件上传失败时的钩子 | - | `(err: any, file: UploadFile) => void` |
| onChange | 文件状态改变时的钩子，上传成功或者失败时都会被调用 | - | `(file: UploadFile) => void` |
| onRemove | 文件列表移除文件时的钩子 | - | `(file: UploadFile) => void` |
| headers | 设置上传的请求头部 | - | `{ [key: string]: any }` |
| name | 上传的文件字段名 | "file" | `string` |
| data | 上传时附带的额外参数 | - | `{ [key: string]: any }` |
| withCredentials | 支持发送 cookie 凭证信息 | - | `boolean` |
| accept | 可选参数，接受上传的文件类型 | - | `string` |
| multiple | 是否支持多选文件 | - | `boolean` |
| drag | 是否支持拖拽上传 | - | `boolean` |
