const mysql = require('mysql2');
const configs = require('./../configs');

module.exports = function getConnection() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: configs.host,
            port: configs.port,
            user: configs.user,
            password: configs.password,
            database: configs.database
        });

        try {
            connection.connect();
        } catch (err) {
            reject(err);
        }

        resolve(connection);
    });
};