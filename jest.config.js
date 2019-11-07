module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
      'src/**/*.ts',
      '!src/types/*.d.ts'
  ],
  coverageDirectory: 'coverage',
};
