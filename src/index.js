const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');

const config = require('./config/config');
const userRoutes = require('./routes/users');
const departRoutes = require('./routes/departments');

const app = express();

app.use(express.json());

app.use(logger('dev'));

app.use(cors());

app.options('*', cors());

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/departments', departRoutes);

app.all('*', () => {
  throw createError(401, 'This Endpoint does not Exist!');
});
// eslint-disable-next-line
app.use((err, req, res, next) => {
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
