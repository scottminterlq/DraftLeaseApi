const DAL = require('./../DAL');

module.exports = function GetAllLeases() {
  return new Promise((resolve, reject) => {
    DAL.getAllLeases()
      .then((leases) => {
        resolve(leases);
      })
      .catch((err) => {
        reject(err);
      })
  });
};