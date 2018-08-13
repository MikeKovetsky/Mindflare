const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractLess = new ExtractTextPlugin('./assets/less/style.less');
const extractScss = new ExtractTextPlugin('./assets/scss/style.scss');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new FaviconsWebpackPlugin('./src/assets/media/favicons/favicon-32x32.png'),
        extractLess,
        extractScss
    ],
    devServer: {
        contentBase: './src',
        hot: true,
        watchContentBase: true,
        compress: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.less$/,
            use: extractLess.extract([ 'css-loader', 'less-loader' ])
        },
        {
            test: /\.scss$/,
            use: extractScss.extract([ 'css-loader', 'sass-loader'])
          },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
            'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: "file-loader"
        }
        ]
    },
};