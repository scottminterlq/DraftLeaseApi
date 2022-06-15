const Joi = require('joi');

module.exports = Joi.object({
  'id': Joi.number().required(),
  'leaseType': Joi.string().required(),
}).unknown();