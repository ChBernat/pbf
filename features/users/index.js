'use strict';

const router = require('express').Router();
const update = require("./update");

router.delete('/delete/:id', /* auth, */  require("./delete"));
router.post('/register', /* auth, */ require("./create"));
router.post('/login', /* auth, */ require("./login"));
router.get('/total', require('./total'));
router.get('/', require("./getAll"));
router.get('/:id', require("./get"));

module.exports = router;
