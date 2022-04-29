module.exports = {
  roots: ['<rootDir>'],
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist', '<rootDir>/build'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  preset: 'ts-jest',
};
