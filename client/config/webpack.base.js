const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack')

// const dotenv = require('dotenv').config();
// console.log(dotenv);
// const isDev = process.env.NODE_ENV === 'development';

// console.log(path.dirname(__dirname));
// console.log(path.resolve(__dirname, '../../node_modules'));
console.log(path.resolve(path.dirname(__dirname),'src/util'));
module.exports = {
    entry: path.resolve(__dirname, '../src/main.ts'),//入口文件
    output: {// 出口目录及文件
        path: path.join(__dirname, '../dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.jsx', '.json'], // 省略文件后缀
        alias: {
            // 配置别名
            '@': path.resolve(path.dirname(__dirname), 'src'),
            '@api': path.resolve(path.dirname(__dirname), 'src/api'),// 存放图片、音频、视频
            '@util': path.resolve(path.dirname(__dirname), 'src/util'),// 工具函数
            '@assets': path.resolve(path.dirname(__dirname), 'src/assets'),// 存放图片、音频、视频
            '@scss': path.resolve(path.dirname(__dirname), 'src/scss'),// 存放scss,css,sass文件
            '@mock': path.resolve(path.dirname(__dirname), 'src/mock'),// 存放mock文件,
            '@router': path.resolve(path.dirname(__dirname), 'src/router'),// 存放路由文件
            '@store': path.resolve(path.dirname(__dirname), 'src/store'),// 存放vuex文件
            '@views': path.resolve(path.dirname(__dirname), 'src/views'),// 存放html文件
            '@comp': path.resolve(path.dirname(__dirname), 'src/components'),// 存放组件文件
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [path.resolve(__dirname, '../src')]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env'],
                //     },
                // },
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, '../../tsconfig.json'),
                            appendTsSuffixTo: [/\.vue$/],
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    filename: 'asset/imgs/[name]_[hash:8][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|)$/,
                type: 'asset/resource',
                generator: {
                    // 输出文件位置以及文件名
                    filename: 'assets/fonts/[hash:8].[name][ext]'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/views/index.html'),// 模板文件
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_PROD_DEVTOOLS__: false,//
            __VUE_OPTIONS_API__: false,//
        }),
    ],
};