const app = require('express');
const router = app.Router();
const dbHealth = require('./Controller').db;

router.get('/db', (req, res) => {
    dbHealth()
        .then((healthStatus) => {
            res.json(healthStatus);
        })
        .catch((err) => {
            res.status(400).send(err.error);
        });
});

module.exports = router;