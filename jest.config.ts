import { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|html)$': ['ts-jest', {
      tsconfig: 'tsconfig.spec.json',
      useESM: false,
    }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: {
    '^.+\\.(scss|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/app.config.ts',
    '!src/app/app.routes.ts',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
};

export default config;
