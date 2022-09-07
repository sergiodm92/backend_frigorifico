const { Router } = require('express');
const ventas = require('./ventas');

const router = Router();

router.use('/ventas', ventas);

module.exports = router;
