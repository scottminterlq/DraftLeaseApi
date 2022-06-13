const DAL = require('./../DAL');

module.exports = function dbHealthCheckDAL() {
  return new Promise((resolve, reject) => {
    DAL.dbHealthCheck()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};