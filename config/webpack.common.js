const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './source/index.tsx',

	output: {
		path: resolve(__dirname, '../build'),
		filename: '[name].bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},

			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},

			{
				test: /\.css$/,
				exclude: /\.module\.css$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						modules: {
							mode: 'icss',
						},
						importLoaders: 1,
					},
				}, {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								[
									'postcss-preset-env',
								],
							],
						},
					},
				},
				],
			},

			{
				test: /\.module\.css$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
						},
						importLoaders: 1,
					},
				}, {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								[
									'postcss-preset-env',
								],
							],
						},
					},
				},
				],
			},

			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
		],
	},

	resolve: {
		alias: {
			assets: resolve(__dirname, '../source/assets/'),
			components: resolve(__dirname, '../source/components/'),
			pages: resolve(__dirname, '../source/pages/'),
			utils: resolve(__dirname, '../source/utils/'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},

	plugins: [new HtmlWebpackPlugin({
		template: resolve(__dirname, '../source/index.html'),
	})],
};
