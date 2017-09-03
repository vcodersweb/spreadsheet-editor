const path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, './src')

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
    entry: [
        // `webpack-dev-server/client?http://${HOST}:${PORT}`,
        // `webpack/hot/only-dev-server`,
        APP_DIR + '/components/app.jsx'
    ],
    output: {
        // path: BUILD_DIR,
        // filename: 'bundle.js',
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
                "presets": ["react", "es2015", "stage-2"]
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
}