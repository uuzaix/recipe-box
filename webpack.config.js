module.exports = {
  devtool: "sourcemap",
  entry: "./src/index.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /.js$/, exclude: /node_modules/, loader: "babel"}
    ]
  }
}