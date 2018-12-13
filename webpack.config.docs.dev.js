/**
 * Created by zeqi
 * @description webpack config
 * @module Main
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File webpack.config
 * @Date 18-3-7
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base.js');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackBaseConfig, {

  entry: './examples/main.ts',

  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: './',
    filename: 'js/[name].[chunkhash].js', //"[name].bundle.js",
    chunkFilename: 'js/[name].[chunkhash].js', // "[id].bundle.js"
    pathinfo: true // show comments in bundles, just to beautify the output of this example.
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/public/dev.html',
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true //压缩空格
      },
      chunksSortMode: 'dependency',
      env: process.env.NODE_ENV || 'default'
    }),
    new webpack.optimize.CommonsChunkPlugin('common'),
    // css抽取
    new ExtractTextPlugin({ filename: 'css/[name].[chunkhash].css', allChunks: true }),
    // @todo
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      output: {
        comments: false,
      },
    }),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js|css|ts)$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    new CopyWebpackPlugin([{
      from: './examples/public'
    }], {
        ignore: [
          // Doesn't copy any files with a txt extension    
          '*.html'

          // Doesn't copy any file, even if they start with a dot
          // '**/*',

          // Doesn't copy any file, except if they start with a dot
          // { glob: '**/*', dot: false }
        ]

        // By default, we only copy modified files during
        // a watch or webpack-dev-server build. Setting this
        // to `true` copies all files.
        // copyUnmodified: true
      }),
  ]
})