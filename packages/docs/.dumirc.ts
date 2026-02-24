import { defineConfig } from 'dumi';
import path from 'path';

let base: string | undefined = '/tsuki-ui';
let publicPath: string | undefined = '/tsuki-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'TSUKI UI', // 站点名称
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  base,
  publicPath,
  resolve: {
    atomDirs: [{ type: 'component', dir: '../ui/src' }],
  },
  alias: {
    'tsuki-ui': path.join(__dirname, '../ui/src'),
  },
});
