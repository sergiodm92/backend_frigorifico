const { Router } = require('express');

const getCountries = require('./getCountries');
const postActivity = require('./postActivity')

const router = Router();

router.use('/countries', getCountries);
router.use('/activity', postActivity);

module.exports = router;
