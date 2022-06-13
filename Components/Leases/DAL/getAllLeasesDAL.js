const db = require('./../../../Connections');

module.exports = function GetAllLeasesDAL() {
  return new Promise((resolve, reject) => {
    db.getConnection()
      .then((conn) => {
        const qry = 'SELECT * FROM lq_testing.land_building_lease';
        conn.execute(qry, [], (err, results, fields) => {
          conn.end();
          if (err) {
            reject(err);
          }

          resolve(results);
        });
      })
  });
};