const db = require('./../../../Connections');

module.exports = function dbHealthCheckDAL() {
  return new Promise((resolve, reject) => {
    db.getConnection().then((conn) => {
      const qry = `SELECT message FROM lq_testing.test;`;
      conn.query(qry, (err, results, fields) => {
        conn.end();
        if (err) {
          reject(err);
        }

        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve({});
        }
      });
    }).catch((err) => {
      reject(err);
    });
  });
};