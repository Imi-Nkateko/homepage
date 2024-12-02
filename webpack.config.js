const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js", // The entry point of your app
	output: {
		filename: "bundle.js", // The name of the output bundle file
		path: path.resolve(__dirname, "dist"), // The output directory
		clean: true, // Automatically clean the dist folder before each build
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"], // Handle CSS files
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html", // Use the index.html template
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"), // new property
		},
		compress: true,
		port: 9000,
	},
	mode: "development", // Set mode to 'development' for faster builds and better debugging
};
