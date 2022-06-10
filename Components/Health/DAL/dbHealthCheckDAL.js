const db = require('./../../../Connections');

module.exports = function dbHealthCheckDAL() {
    return new Promise((resolve, reject) => {
        db.getConnection().then((conn) => {
            console.log('Connected');
            const qry = `SELECT message FROM lq_testing.test;`;

            conn.query(qry, (err, results, fields) => {
                conn.end();
                if (err) {
                    reject(err);
                }

                // use lodash to get message
                resolve({
                    message: results[0].message,
                });
            });
        }).catch((err) => {
            reject(err);
        });
    });
};