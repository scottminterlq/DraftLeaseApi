const DAL = require('../DAL');

module.exports = function GetLeaseByValue(field, value) {
  return new Promise((resolve, reject) => {
    DAL.getLeaseByValue(field, value)
      .then((leaseData) => {
        resolve(leaseData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};