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

module.exports = merge(webpackBaseConfig, {

    entry: './examples/main.ts',

    output: {
        path: path.resolve(__dirname, './examples/dist'),
        publicPath: '/',
        filename: 'js/[name].js?[hash:8]', //"[name].bundle.js",
        //sourceMapFilename: 'js/[name].map?[hash:8]',
        chunkFilename: 'js/[name].chunk.js?[hash:8]', // "[id].bundle.js"
        pathinfo: true // show comments in bundles, just to beautify the output of this example.
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/public/dev.html',
            chunksSortMode: 'dependency',
            env: process.env.NODE_ENV || 'default'
        }),
        new ExtractTextPlugin({ filename: 'css/[name].[chunkhash].css', allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'default')
            }
        })
    ],

    devServer: {
        contentBase: './examples/public/',
        port: 8202,
        host:'0.0.0.0',
        historyApiFallback: true,
        staticOptions: {},
        setup: function (app) {
            // Here you can access the Express app object and add your own custom middleware to it.
            // For example, to define custom handlers for some paths:
            app.get(/^\/(favicon\.ico|(css\/(common)\.css)|(js\/(interactive|avatar-1.2.2|ludp)\.js)|(images\/.+\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)))/, function (req, res) {
                console.log('static resource ', req._parsedUrl.pathname);
                var options = {
                    root: __dirname + '/examples/public/',
                    dotfiles: 'deny',
                    headers: {
                        'Cache-Control': 'no-cache, no-store'
                    }
                };
                return res.sendFile(req._parsedUrl.pathname, options, function (err) {
                    if (err) {
                        console.log('Send file favicon.ico error:', err);
                    }
                });
            });
        },

        // quiet: true,
        // proxy: {
        //     "/": "http://localhost:7201"
        // },
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    }
})