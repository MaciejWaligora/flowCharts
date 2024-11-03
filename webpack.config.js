// webpack.config.js
const path = require('path');

module.exports = {
  entry: './main.js',  // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',  // Output file
  },
  mode: 'development',  // Set to 'production' for production builds
  optimization: {
    minimize: true
  }
};
