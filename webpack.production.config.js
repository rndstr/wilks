var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    devtool: 'eval',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'index.html'}
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
