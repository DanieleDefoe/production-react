import type { ResolveOptions } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildResolvers = (
  paths: Pick<BuildOptions['paths'], 'src'>
): ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': paths.src,
    },
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
};
