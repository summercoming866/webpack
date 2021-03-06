const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "66's App",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
