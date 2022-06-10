const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

/**
 * Pull in component routes
 */
const health = require('./Components/Health/routes');
const leases = require('./Components/Leases/routes');

/**
 * Middlesware
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

/**
 * Endpoints
 */
app.use('/health', health);
app.use('/leases', leases);

/**
 * Server running
 */
app.listen(port, () => {
    console.log(`App is listening on post ${port}`);
});