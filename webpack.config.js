const path = require('path');

module.exports = {
	watch: true,
	mode: 'development',
	entry: { index: './src/index.js' },
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: { extensions: ['.mjs', '.js', '.json', '.html'] },
	stats: 'normal',
	module: {
		rules: [
			// { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [ 'svelte-loader' ],
			},
		]
	}
};
