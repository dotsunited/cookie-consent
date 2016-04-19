var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        demo: __dirname
    },
    output: {
        path: path.join(__dirname, '..'),
        publicPath: './',
        filename: '[name].js?[chunkhash]',
        chunkFilename: 'demo.[name].js?[chunkhash]'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    }
};
