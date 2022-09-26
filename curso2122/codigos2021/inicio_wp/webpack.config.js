// variables: plugins

const htmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// exportacion: reglas y configuraciones

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin()],
  },
  output: {
    filename: "main.[contenthash].js",
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
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: false,
      filename: "style.[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/images/", to: "assets/images" }],
    }),
  ],
};
