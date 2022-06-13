const DAL = require('./../DAL');

module.exports = function GetLeaseById(id) {
  return new Promise((resolve, reject) => {
    DAL.getLeaseById(id)
      .then((leaseData) => {
        resolve(leaseData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};