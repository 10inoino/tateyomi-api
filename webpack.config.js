const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/functions/hello/handler.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    alias: {
      '@libs/': path.resolve('var/task/src/libs/'),
      '@functions/': path.resolve('var/task/src/functions/'),
    },
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    libraryTarget: 'commonjs',
    path: __dirname,
    filename: 'handler.js',
  },
  optimization: {
    concatenateModules: false,
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
};