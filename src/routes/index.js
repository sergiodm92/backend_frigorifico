const { Router } = require('express');
const clientes = require('./clientes');
const compras = require('./compras');
const faenas = require('./faenas');
const pagoCompras = require('./pagoCompras');
const pagoFaenas = require('./pagoFaenas');
const pagoVentas = require('./pagoVentas');
const pagoVentaAchuras = require('./pagoVentaAchura');
const proveedores = require('./proveedores');
const res = require('./res');
const stock = require('./stock');
const user = require('./user');
const ventas = require('./ventas');
const ventaAchuras = require('./ventaAchuras')
const verifyToken = require('../middlewares/verify-token');

const router = Router();

router.use('/clientes', verifyToken, clientes);
router.use('/compras', verifyToken, compras);
router.use('/faenas', verifyToken, faenas);
router.use('/pagoCompras', verifyToken, pagoCompras);
router.use('/pagoFaenas', verifyToken, pagoFaenas);
router.use('/pagoVentas', verifyToken, pagoVentas);
router.use('/pagoVentaAchuras', verifyToken, pagoVentaAchuras);
router.use('/proveedores', verifyToken, proveedores);
router.use('/res', verifyToken, res);
router.use('/stock', verifyToken, stock);
router.use('/user', user);
router.use('/ventas', verifyToken, ventas);
router.use('/ventaAchuras', verifyToken, ventaAchuras);

module.exports = router;
