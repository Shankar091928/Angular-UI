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
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
};
