const _ = require('lodash');
const db = require('../../../Connections');

module.exports = function CreatePrefillLeaseDAL(leaseData) {
  return new Promise((resolve, reject) => {
    db.getConnection()
      .then((conn) => {
        const today = new Date();
        const currDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const qry = `INSERT INTO lq_testing.prefill_lease (client_id, prefill_data, date_created) VALUES (?, ?, ?)`;
        const params = [
          _.get(leaseData, 'clientId', null),
          JSON.stringify(leaseData),
          currDate,
        ];

        conn.execute(qry, params, (err, results, fields) => {
          conn.end();
          if (err) {
            reject(err);
          }

          resolve({
            message: 'success',
            new_lease_id: _.get(results, 'insertId', null),
          });
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
