import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { buildResolvers } from '../webpack/buildResolvers';
import { buildCssLoader } from '../webpack/loaders/buildCssLoader';
import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';

const config: StorybookConfig = {
  staticDirs: ['../../public'],
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  webpackFinal: (config) => {
    const src = path.resolve(__dirname, '..', '..', 'src');

    config.resolve = buildResolvers({ src });

    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];

    config.module?.rules?.push(buildCssLoader(true));

    config.module?.rules?.push(buildSvgLoader());

    config.plugins?.push(new DefinePlugin({ __IS_DEV__: true }));

    return config;
  },
};
export default config;
