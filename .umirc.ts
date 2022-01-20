import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  define: {
    'process.env.__DEV__': process.env.dev,
  },
  webpack5: {},
});
