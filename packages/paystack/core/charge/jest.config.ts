import type { Config } from '@jest/types';

export default {
  preset: '@technanimals/jest/node',
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
} as Config.InitialOptions;
