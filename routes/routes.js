const express = require('express');
const router = express.Router();

// main home page route
router.get('/', (req, res, next) => {
    res.render('pages/index', {});
});

module.exports = router;