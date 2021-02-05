const path = require("path");
/* eslint-disable */
module.exports = {
  entry: {
    pdf: './src/pdf.js',
    worker: './src/core/worker.js',
    network: './src/display/network.js',
    fetch_stream: './src/display/fetch_stream.js'
  },
  resolve: {
    alias: {
      "pdfjs": path.resolve(__dirname, "./src/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
};
