const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:[
        './src/main.js'
    ],

    output:{
        filename:'all.js',
        path: path.resolve(__dirname, 'dist/assets/'),
        publicPath:'/assets/'
    },
   
    module:{
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: [
                   path.resolve(__dirname, './src')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[local]_[hash:base64:6]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: false,
                            localIdentName: '[local]--[hash:base64:6]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }
        ]
    },
    resolve:{
        modules:[
            "node_modules",
            path.resolve(__dirname, 'src/common'),
            path.resolve(__dirname, 'src/components')
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'../index.html',
            template:'./src/index.html'
        }),
        // new CleanWebpackPlugin('dist')
    ],

    devServer:{
        open:true,
        port:9000,
        contentBase:'./dist',
        publicPath:'/assets/'        
    }
}