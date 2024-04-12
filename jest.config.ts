export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/_tests_/_mocks_/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/src/_tests_/_mocks_/styleMock.js",
  },
};
