const express = require('express');

const port = 8888;

const app = express();

// import the routes
const router = require('./routes/routes');

// define view engine
app.set('view engine', 'ejs');

// tell the app to use the routes
app.use('/', router);

app.listen(port, (err) => {
    console.log(`Front-end listening on port ${port}...`);
})