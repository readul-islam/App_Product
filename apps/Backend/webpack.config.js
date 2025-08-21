const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const webpack = require('webpack');
const { join } = require('path');

module.exports = {
  cache: false,
  // Hide noisy dynamic-require warnings coming from framework internals
  ignoreWarnings: [
    // NestJS internals
    { module: /@nestjs\/common\/utils\/load-package\.util\.js/ },
    { module: /@nestjs\/core\/helpers\/load-adapter\.js/ },
    { module: /@nestjs\/core\/helpers\/optional-require\.js/ },
    // Express internals
    { module: /express\/lib\/view\.js/ },
    // load-esm helper
    { module: /load-esm\/index\.js/ },
    // source-map-loader noise from third-party packages
    { message: /Failed to parse source map/ },
    { module: /node_modules\/iterare\/lib\// },
  ],
  // Avoid bundling optional/native deps that are conditionally required by Nest or ws
  externals: [
    {
      bufferutil: 'commonjs bufferutil',
      'utf-8-validate': 'commonjs utf-8-validate',
    },
  ],
  resolve: {
    // Do not try to polyfill these native addons in Node bundling context
    fallback: {
      bufferutil: false,
      'utf-8-validate': false,
    },
    alias: {
      '@nestjs/microservices': false,
      '@nestjs/microservices/microservices-module': false,
    },
  },
  output: {
    path: join(__dirname, 'dist'),
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^@nestjs\/microservices(\/.*)?$/ }),
    new webpack.IgnorePlugin({ resourceRegExp: /^(bufferutil|utf-8-validate)$/ }),
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMaps: true,
    }),
  ],
};
