module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
  ],
  notify: true,
  // A preset that is used as a base for Jest's configuration
  preset:  "rollup-jest",
  resetMocks: true,
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  timers: "fake",
  // Whether to use watchman for file crawling
  // watchman: true,
};
