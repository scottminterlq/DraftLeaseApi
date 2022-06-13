const db = require('./../../../Connections');

module.exports = function GetLeaseByIdDAL(id) {
  return new Promise((resolve, reject) => {
    db.getConnection()
      .then((conn) => {
        const qry = 'SELECT * FROM lq_testing.land_building_lease WHERE id = ?';
        const params = [
          id
        ];

        conn.execute(qry, params, (err, results, fields) => {
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
      });
  });
};