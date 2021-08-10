const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');

const config = require('./config/config');

const app = express();

app.use(express.json());

app.use(logger('dev'));

app.use(cors());

app.options('*', cors());

app.get('/api/v1/', (req, res, next) => {
  try {
    res.status(200).json({
      error: null,
      ok: true,
      status: 200,
      message: 'Success',
      data: null
    });
  } catch (error) {
    next(error);
  }
});

app.all('*', () => {
  throw createError(401, 'This Endpoint does not Exist!');
});

app.use((err, req, res) => {
  res.status(err.status || 500).json({
    error: err,
    ok: false,
    status: err.status || 500,
    message: `ERROR: ${err.message}`,
    data: null
  });
});

app.listen(config.ENV.Port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${config.ENV.Port}`);
});
