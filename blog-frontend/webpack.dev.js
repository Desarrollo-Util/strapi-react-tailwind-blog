const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    publicPath: "/",
    host: "localhost",
    open: true,
    port: 3001,
    hot: true,
  },
  entry: resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: resolve(__dirname, "public/index.html") }),
  ],
};
