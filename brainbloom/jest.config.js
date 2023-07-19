module.exports = {
    preset: 'jest-expo',
    transform: {
      '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        babelConfig: true,
        tsconfig: 'tsconfig.jest.json',
        diagnostics: false,
      },
    },
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  