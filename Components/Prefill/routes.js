const app = require('express');
const _ = require('lodash');
const router = app.Router();
const ctrl = require('./Controller');

router.get('/', (req, res) => {
  ctrl.getAllPrefill()
    .then((leases) => {
      res.json(leases);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/:getBy/:id', (req, res) => {
  const field = _.get(req.params, 'getBy', null);
  const value = _.get(req.params, 'id', null);

  ctrl.getPrefillByValue(field, value)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(err.status).send(err);
    })
});

router.post('/', (req, res) => {
  const prefillData = _.get(req, 'body', null);
  ctrl.createPrefill(prefillData)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;