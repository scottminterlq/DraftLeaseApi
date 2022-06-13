const Joi = require('joi');
const schema = require('./../Schemas').createLeaseSchema;

module.exports = function CreateLease(leaseReqs) {
  return new Promise((resolve, reject) => {
    console.log(leaseReqs);
    const { error, value } = schema.validate(leaseReqs);
    if (error) {
      reject(error.details[0].message);
    }
    console.log(value);

    resolve({
      message: 'Create new Lease(s)',
    });
  });
}