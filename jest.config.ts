/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import { installGlobals } from "@remix-run/node";
installGlobals();

export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "js",
  coverageThreshold: {
    global: {
      branches: 16,
      functions: 16,
      lines: 25,
      statements: 25,
    },
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "!**/node/**",
    "!**/build/**"
  ]
};
