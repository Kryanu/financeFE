const path = require('node:path')
const rspack = require('@rspack/core')
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('@rspack/cli').Configuration} */
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true
        }
      },
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({
      template: './index.html'
    }),
    new rspack.CopyRspackPlugin({
      patterns: [{ from: 'public', to: '.' }]
    }),
    new rspack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify('/')
    }),
    new rspack.container.ModuleFederationPlugin({
      name: 'financeFe',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/bootstrap.js'
      },
      shared: {
        vue: { singleton: true },
        'vue-router': { singleton: true },
        pinia: { singleton: true }
      }
    })
  ],
  experiments: {
    css: true
  },
  devServer: {
    port: 5172,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto',
    uniqueName: 'financeFe'
  }
}
