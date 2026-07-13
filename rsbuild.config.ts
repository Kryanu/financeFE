import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

const { publicVars } = loadEnv({ prefixes: ['VITE_'] });

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    template: './index.html',
  },
  source: {
    define: publicVars,
    entry: {
      index: './src/main.js',
    },
  },
});
