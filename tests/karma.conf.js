const createWebpack = require('./webpack.config');
const path = require('path');

module.exports = (config) => {
  const coverage = false;
  // const coverage = config.coverage !== undefined ? true : false;

  const reporters = ['dots'];
  if (coverage) {
    reporters.push('coverage-istanbul');
  }
  config.set({
    port: 8080,
    basePath: '../',
    browsers: [
      // 'Firefox',
      'Chrome',
    ],
    frameworks: ['mocha'],
    files: [
      { pattern: 'tests/specs/*.ts', type: 'ts' },
      // { pattern: 'tests/specs/ol-map-adapter.spec.ts', type: 'ts' },
      // { pattern: 'tests/internet-specs/*.spec.ts', type: 'ts' },
    ],
    preprocessors: {
      'tests/specs/*.spec.ts': ['webpack', 'sourcemap'],
    },
    webpack: createWebpack({ coverage }),
    webpackMiddleware: {
      noInfo: true,
    },
    reporters,
    coverageIstanbulReporter: {
      reports: ['text-summary', 'html'],
      dir: path.resolve(__dirname, '../coverage/'),
      fixWebpackSourcePaths: true,
    },
  });
};
