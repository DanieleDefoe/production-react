import path from 'path';
import webpack, { type Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: {
    RANDOM: path.resolve(__dirname, 'src', 'index.ts'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
};

export default config;
