const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'app/index.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-1']
        }
      }
    ]
  }

}
