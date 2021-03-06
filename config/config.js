// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
const { API_URL } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: {
    '/api/': {
      target: API_URL,
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  // ssr: {
  //   forceInitial: false,
  //   removeWindowInitialProps: false,
  //   devServerRender: true,
  //   mode: 'string',
  //   staticMarkup: false,
  // },
  manifest: {
    basePath: '/',
  },
  // 快速刷新功能 https://umijs.org/config#fastrefresh
  fastRefresh: {},
  esbuild: {},
  chainWebpack: (config, { webpack }) => {
    config.plugin('globalLib').use(webpack.ProvidePlugin, [
      {
        get: 'lodash/get',
      },
    ]);
  }
});
