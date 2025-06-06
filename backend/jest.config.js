module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'json',
    'node'
  ],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/tests/**/*.test.js'
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/'
  ],

  // A map from regular expressions to paths to transformers
  transform: {},

  // Setup files to run before each test
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};