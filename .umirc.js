import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'home' },
  ],
  npmClient: 'npm',
  chainWebpack(config) {
    config.devtool('source-map');
  },
});
