const { Router } = require('express');
const clientes = require('./clientes');
const compras = require('./compras');
const faenas = require('./faenas');
const pagoCompras = require('./pagoCompras');
const pagoFaenas = require('./pagoFaenas');
const pagoVentas = require('./pagoVentas');
const proveedores = require('./proveedores');
const res = require('./res');
const stock = require('./stock');
const user = require('./user');
const ventas = require('./ventas');
const verifyToken = require('../middlewares/verify-token');

const router = Router();

router.use('/clientes', verifyToken, clientes);
router.use('/compras', verifyToken, compras);
router.use('/faenas', verifyToken, faenas);
router.use('/pago-compras', verifyToken, pagoCompras);
router.use('/pago-faenas', verifyToken, pagoFaenas);
router.use('/pago-ventas', verifyToken, pagoVentas);
router.use('/proveedores', verifyToken, proveedores);
router.use('/res', verifyToken, res);
router.use('/stock', verifyToken, stock);
router.use('/user', user);
router.use('/ventas', verifyToken, ventas);

module.exports = router;
