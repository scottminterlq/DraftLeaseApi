const schema = require('../Schemas').createLeaseSchema;
const DAL = require('../DAL');

module.exports = function CreateLease(leaseReqs) {
  return new Promise((resolve, reject) => {
    // validate against JOI schema
    const { error, value } = schema.validate(leaseReqs);
    if (error) {
      reject(error.details[0].message);
    }

    DAL.createPrefillLease(value)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
