import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/webpack/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
  const { port = 3000, mode = 'development', analyze = 'false' } = env;

  const isDev = mode === 'development';
  const shouldAnalyze = analyze === 'true';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    shouldAnalyze,
  });

  return config;
};
