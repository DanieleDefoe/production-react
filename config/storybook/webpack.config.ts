import { buildResolvers } from 'config/webpack/buildResolvers';
import { buildCssLoader } from 'config/webpack/loaders/buildCssLoader';
import { buildSvgLoader } from 'config/webpack/loaders/buildSvgLoader';
import path from 'path';
import ReactDocgenTypescriptPlugin from 'react-docgen-typescript-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const src = path.resolve(__dirname, '..', '..', 'src');

  config.resolve = buildResolvers({ src });

  config.resolve.plugins = [
    ...(config.resolve.plugins ?? []),
    new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
  ];

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (rule.test && rule.test instanceof RegExp && rule.test.test('.svg')) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
  }

  config.module?.rules?.push(buildSvgLoader());

  config.module?.rules?.push(buildCssLoader(true));

  config.plugins?.push(
    new DefinePlugin({ __IS_DEV__: true }),
    new ReactDocgenTypescriptPlugin()
  );

  return config;
};
