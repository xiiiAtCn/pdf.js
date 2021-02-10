const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/* eslint-disable */
module.exports = {
  entry: "./web/viewer.js",
  resolve: {
    alias: {
      "pdfjs": path.resolve(__dirname, "./src/"),
      "pdfjs-lib": path.resolve(__dirname, "./src/pdf.js"),
      "pdfjs-web": path.resolve(__dirname, "./web/")
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "name.[hash:10].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './web/images'), to: path.resolve(__dirname, 'dist/images') },
        { from: path.resolve(__dirname, './web/viewer.css'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, './web/pdf_viewer.css'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, './web/text_layer_builder.css'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, './web/annotation_layer_builder.css'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, './web/compressed.tracemonkey-pldi-09.pdf'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'web/viewer.html'),
      inject: 'body',
      name: 'viewer.html'
    })
  ]
};
