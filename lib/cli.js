#!/usr/bin/env node
const path = require('path');
const generateImageAssetsJSON = require('./index');
const getCliArgs = require('./cli-args');

const options = {
  assets: {
    cliParams: ['-a', '--assets'],
    type: 'array',
  },
  rootPath: {
    cliParams: ['-p', '--path'],
    type: 'value',
    default: process.cwd(),
  },
  noUnlink: {
    cliParams: ['-n-u', '--no-unlink'],
    type: 'bool',
  },
};

const cliArgs = getCliArgs(
  process.argv, // .slice(2),
  options,
);

const {
  rootPath,
  noUnlink,
  assets,
  iosAssets,
  androidAssets,
} = cliArgs;

// Using dynamic require for config file, is written in js
// eslint-disable-next-line import/no-dynamic-require
const reactNativeConfig = require(path.resolve(rootPath, 'react-native.config.js'));
generateImageAssetsJSON({rootPath, assets: reactNativeConfig.assets});
