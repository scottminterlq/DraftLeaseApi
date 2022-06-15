const db = require('./../../../Connections');

module.exports = function ValidateAuth(token) {
  return new Promise((resolve, reject) => {
    db.getConnection()
      .then((conn) => {
        const qry = `SELECT * FROM lq_testing.application_tokens where token = ?;`;
        const params = [
          token
        ];

        conn.execute(qry, params, (err, results, fields) => {
          conn.end();
          if (err) {
            reject(err);
          }

          if (results.length > 0) {
            resolve(results);
          } else {
            resolve([]);
          }
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
