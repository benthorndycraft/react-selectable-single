const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'react-selectable-single.js',
  },
	watchOptions: {
		aggregateTimeout: 300,
		poll: 300
	},
	module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  }
}
