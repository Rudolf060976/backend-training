const Joi = require('joi');

const getUserParams = Joi.object({
  userId: Joi.string().max(50).min(0).required()
}).required();

const getUserQuery = Joi.object({
  username: Joi.string().max(50).min(0).required(),
  password: Joi.string().required()
}).required();

module.exports = {
  getUserParams,
  getUserQuery
};
