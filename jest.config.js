module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [ "<rootDir>/jest-setup.ts"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', "mjs"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1"
  },
  testMatch: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
  // collectCoverageFrom: [
  //   "src/**/*.{js,jsx,ts,tsx,mjs}"
  // ],
  // collectCoverageFrom: [
  //   "src/components/**/*.{js,jsx,ts,tsx,mjs}",
  //   "src/pages/**/*.{js,jsx,ts,tsx,mjs}"
  // ],
  modulePathIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
    // "./dist",
    // "./src/vite-env.d.ts",
    // "./src/main.tsx",
    // "./src/tests/coverage",
    // "./src/_app.tsx",
    // "./src/routes.js"
  ],
  coverageDirectory: "<rootDir>/src/tests/coverage/"
}