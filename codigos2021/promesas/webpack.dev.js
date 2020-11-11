// variables: plugins

const htmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// exportacion: reglas y configuraciones

module.exports = {
  mode: "development",
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attributes: false },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /style\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader", options: { esModule: false } }],
      },
      {},
    ],
  },
  plugins: [
    new htmlPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: false,
      filename: "style.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/images/", to: "assets/images" }],
    }),
  ],
};
