const path = require('path');

require('custom-env').env(true, path.resolve());

const isDev = (process.env.NODE_ENV === 'development') || (process.env.NODE_ENV === undefined);

const isTest = (process.env.NODE_ENV === 'test');

const isProd = (process.env.NODE_ENV === 'production');

const apiUrl = 'http://localhost:3000';

module.exports = {
  ENV: {
    isDev,
    isTest,
    isProd,
    Port: process.env.PORT,
  },
  APP: {
    apiUrl
  }
};
