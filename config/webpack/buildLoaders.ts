import ReactRefreshTypeScript from 'react-refresh-typescript';
import { type RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import type { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)?$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
      },
    },
  } satisfies RuleSetRule;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: options.isDev,
        },
      },
    ],
    exclude: /node_modules/,
  } satisfies RuleSetRule;

  const cssLoader = buildCssLoader(options.isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp|avif|ico|woff2?|eot|[to]tf|mp3|wav|flac|aac|ogg|webm|pdf|docx?|xlsx?|pptx?|zip|txt|md|xml|csv|json|ya?ml)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  } satisfies RuleSetRule;

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
};
