const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const app = express();
const port = 3000;
const authCtrl = require('./Components/Auth');

/**
 * Pull in component routes
 */
const health = require('./Components/Health/routes');
const prefill = require('./Components/Prefill/routes');

/**
 * Middlesware
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

/**
 * Validate Header Auth
 */
app.use((req, res, next) => {
  const token = _.get(req.headers, 'authorization', null);
  if (!token) {
    return res.status(403).json({ error: 'No Credentials Provided' });
  }

  authCtrl.validateAuth(token)
    .then((isValid) => {
      next();
    })
    .catch((err) => {
      res.status(401).json({ error: 'Unauthorized' })
    });
});

/**
 * Endpoints
 */
app.use('/health', health);
app.use('/prefill', prefill);

/**
 * Server running
 */
app.listen(port, () => {
  console.log(`App is listening on post ${port}`);
});