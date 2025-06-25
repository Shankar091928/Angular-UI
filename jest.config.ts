export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testMatch: [
    '**/+(*.)+(spec|test).+(ts|js)?(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/**/*.{ts,js}'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
  },
  coverageReporters: [
    'jest-preset-angular',
    'jest-html-reporter',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
};
