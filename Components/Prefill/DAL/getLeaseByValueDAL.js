const db = require('./../../../Connections');

module.exports = function GetLeaseByValueDAL(field, value) {
  return new Promise((resolve, reject) => {
    db.getConnection()
      .then((conn) => {
        let dbCol = 'id';
        switch (field) {
          case 'client-id':
            dbCol = 'client_id';
            break;
          case 'lease-id':
            dbCol = 'lease_id';
            break;
        }
        let qry = `SELECT * FROM lq_testing.prefill_lease WHERE ${dbCol} = ?`;

        const params = [
          parseInt(value)
        ];

        conn.execute(qry, params, (err, results, fields) => {
          conn.end();
          if (err) {
            reject(err);
          }

          if (results.length > 0) {
            resolve(results);
          } else {
            reject({
              status: 204,
              message: 'No Content'
            });
          }
        });
      });
  });
};