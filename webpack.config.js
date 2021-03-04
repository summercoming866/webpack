var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "66's App",
      template: 'src/assets/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash].css',
      chunkFilename:'[id].[contenthash].css',
      ignoreOrder:false
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};
