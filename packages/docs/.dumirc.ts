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
  mfsu: false,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  chainWebpack(config: any) {
    config.output.chunkFilename('[name].[contenthash:8].async.js');

    // 去掉 chunk name 中的冒号（Windows 盘符 D: 导致文件名非法）
    config.plugin('sanitize-chunk-names').use(
      class SanitizeChunkNamesPlugin {
        apply(compiler: any) {
          compiler.hooks.compilation.tap('SanitizeChunkNames', (compilation: any) => {
            compilation.hooks.beforeChunkIds.tap('SanitizeChunkNames', (chunks: Iterable<any>) => {
              for (const chunk of chunks) {
                if (chunk.name && chunk.name.includes(':')) {
                  chunk.name = chunk.name.replace(/:/g, '_');
                }
              }
            });
          });
        }
      },
    );

    config.plugin('solve-windows-naming').use(require('webpack').DefinePlugin, [
      {
        'process.env.FS_WINDOWS': JSON.stringify(true),
      },
    ]);
  },
});
