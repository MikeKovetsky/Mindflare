const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body'
        }),
        new FaviconsWebpackPlugin('./assets/favicon-32x32.png')
    ],
    devServer: {
        contentBase: './src',
        hot: true,
        watchContentBase: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.less$/,
            loader: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
        },
        {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
            'file-loader'
            ]
        }
        ]
    },
};