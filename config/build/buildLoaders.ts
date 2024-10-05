import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  } satisfies RuleSetRule;

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            namedExport: false,
            exportLocalsConvention: 'as-is',
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  } satisfies RuleSetRule;

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  } satisfies RuleSetRule;

  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp|avif|ico|woff2?|eot|[to]tf|mp3|wav|flac|aac|ogg|webm|pdf|docx?|xlsx?|pptx?|zip|txt|md|xml|csv|json|ya?ml)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  } satisfies RuleSetRule;

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
};
