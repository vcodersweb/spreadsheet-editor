const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, './src')

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// global css
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loaders: [
		'style?sourceMap',
		'css-loader'
	]
});
// local css modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.css$/,
    loaders: ['style-loader', 'css-loader']
});

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
		`webpack/hot/only-dev-server`,
        APP_DIR + '/components/App.jsx'
    ],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        filename: './dist/js/bundle.js'
    },
    resolve: {
        modules: ['./src', 'node_modules'],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders
    },
	devServer: {
		contentBase: "./dist",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}