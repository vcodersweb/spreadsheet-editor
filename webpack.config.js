const path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, './src')

module.exports = {
    entry: [
        APP_DIR + '/js/app.jsx'
    ],
    output: {
        filename: './dist/js/bundle.js'
    },
    resolve: {
        modules: ['./src', 'node_modules'],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            include: APP_DIR,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["react", "es2015", "stage-2"]
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
}