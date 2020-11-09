// variables: plugins

const htmlPlugin = require("html-webpack-plugin");

// exportacion: reglas y configuraciones

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attributes: false },
      },
      {},
      {},
      {},
    ],
  },
  plugins: [
    new htmlPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new htmlPlugin({
      template: "./src/componentes/coche.html",
      filename: "./componentes/coche.html",
    }),
  ],
};
