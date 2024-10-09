import type { Configuration } from 'webpack';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export type BuildMode = Exclude<Configuration['mode'], 'none'>;

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  shouldAnalyze: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyze: string;
}
