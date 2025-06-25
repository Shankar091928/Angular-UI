import { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|html)$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/routes/**/*.ts',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
};

export default config;
