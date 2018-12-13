/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts'],
  resolve: {
    extensions: ['.vue', '.js', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      // exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        sourceMap: true
      }
    }, {
      test: /\.js$/,
      loader: 'awesome-typescript-loader',
      options: {
        sourceMap: true,
      },
      exclude: /node_modules/,
    }, {
      test: /\.vue$/,
      include: '/src/',
      use: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          sourceMap: true,
        }
      }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: 'css-loader'
          })
        }
      }
    }, {
      test: /\.css$/,
      loaders: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: '\'autoprefixer-loader\'',
        },
      ]
    }, {
      test: /\.less$/,
      loaders: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        },
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    }),
  ]
};
