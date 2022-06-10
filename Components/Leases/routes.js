const app = require('express');
const router = app.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Get all leases',
  });
});

router.post('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 3));
  res.json({
    message: 'POST new Draft Lease'
  });
});

router.put('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 3));
  res.json({
    message: 'UPDATE existing Draft Lease'
  });
});

module.exports = router;