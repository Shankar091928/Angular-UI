import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/**/*.ts',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
};

export default config;