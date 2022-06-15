const Joi = require('joi');

module.exports = Joi.object({
  'leaseType': Joi.string().required(),
  'clientId': Joi.number().required(),
}).unknown();