const DAL = require('./../DAL');

module.exports = function ValidateAuth(headerAuth) {
  const token = headerAuth.replace('Basic ', '');
  return new Promise((resolve, reject) => {
    DAL.validateAuth(token)
      .then((data) => {
        if (data.length > 0) {
          resolve(true);
        } else {
          reject(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};