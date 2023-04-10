# Changelog - April 10, 2023

## Introduction

- Author: Rui Hu
- Date: April 10, 2023

Thank you so much for the coding interview questions. I had a lot of fun with it. Please see the following changelog.

## Detailed Description

### 1. Organization.ts

1. Implemented the `searchPosition` method to recursively find a position with a given title.
2. Updated the `hire` method to find the position with the given title and hire a new employee with the given name and an auto-incremented identifier.

### 2. Organization.test.ts

1. Created a test file for the `Organization` class.
Added a `TestOrganization` class that extends the `Organization` class.
2. Wrote test cases to test the functionality of the `Organization` class, specifically the `hire` method.

### 3. package.json

- Updated the test script to run Jest with the command `jest`.

### 4. jest.config.js

- Created a Jest configuration file with the following settings:
  - `preset: 'ts-jest'`: Use the `ts-jest` preset for TypeScript support.
  - `testEnvironment: 'node'`: Set the test environment to Node.js.

## Note

When you are running the test, please make sure you're in the correct directory containing the `package.json` file when running the `npm test` command.
