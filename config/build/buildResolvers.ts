import type { ResolveOptions } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': options.paths.src,
    },
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
};
