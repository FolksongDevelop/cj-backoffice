module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [ "<rootDir>/jest-setup.ts"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', "mjs"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1"
  },
  testMatch: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx,mjs}"
  ],
  modulePathIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
    "./dist",
    "./src/vite-env.d.ts",
    "./src/main.tsx",
    "./src/tests/coverage"
  ],
  coverageDirectory: "<rootDir>/src/tests/coverage/"
}