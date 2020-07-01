const path = require('path')

module.exports = {
  entry: "./public/index.html",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename:"bundle.js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude:/node_modules/,
      loader: "babel-loader"
    }]
  }
}