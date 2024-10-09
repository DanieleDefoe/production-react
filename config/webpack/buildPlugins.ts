import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  type WebpackPluginInstance,
  DefinePlugin,
  ProgressPlugin,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
  shouldAnalyze,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
    shouldAnalyze && new BundleAnalyzerPlugin(),
  ].filter((plugin) => !!plugin);
};
