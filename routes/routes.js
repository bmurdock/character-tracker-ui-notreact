const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// main home page route
router.get('/', async (req, res, next) => {
    const characters = await fetch('http://localhost:3333/api/characters')
        .then((response) => {
            return response.json();
        });
    res.render('pages/index', {
        characters
    });
});

// add character page
router.get('/add-character', async (req, res, next) => {
    const classes = await fetch('http://localhost:3333/api/classes')
        .then((response) => {
            return response.json();
        });

    const races = await fetch('http://localhost:3333/api/races')
        .then((response) => {
            return response.json();
        });

    res.render('pages/add-character', {
        classes,
        races,
    });
});

module.exports = router;