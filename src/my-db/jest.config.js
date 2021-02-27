module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleFileExtensions: [
    'js',
  ],
  notify: true,
  preset: 'rollup-jest',
  resetMocks: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  timers: 'fake',
};
