import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  rootDir: '../../',
  testMatch: ['<rootDir>__tests__/**/*(*.)@(spec|test).[jt]s?(x)'],
};

export default config;
