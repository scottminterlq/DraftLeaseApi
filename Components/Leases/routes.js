const app = require('express');
const _ = require('lodash');
const router = app.Router();
const ctrl = require('./Controller');

router.get('/', (req, res) => {
  ctrl.getAllLeases()
    .then((leases) => {
      res.json(leases);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/:id', (req, res) => {
  const leaseId = _.get(req.params, 'id', null);

  ctrl.getLeaseById(leaseId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.post('/', (req, res) => {
  const leases = _.get(req, 'body', null);
  ctrl.createLease(leases)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 3));
  res.json({
    message: 'UPDATE existing Draft Lease'
  });
});

module.exports = router;