const webpack = require('webpack');

module.exports = {
  // Rest of your webpack configuration...

  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
    },
  },
  
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
