const { Router } = require('express');
const clientes = require('./clientes');
const compras = require('./compras');
const faenas = require('./faenas');
const pagoCompras = require('./pagoCompras');
const pagoFaenas = require('./pagoFaenas');
const pagoVentas = require('./pagoVentas');
const proveedores = require('./proveedores');
const stock = require('./stock');
const ventas = require('./ventas');

const router = Router();

router.use('/clientes', clientes);
router.use('/compras', compras);
router.use('/faenas', faenas);
router.use('/pago-compras', pagoCompras);
router.use('/pago-faenas', pagoFaenas);
router.use('/pago-ventas', pagoVentas);
router.use('/proveedores', proveedores);
router.use('/stock', stock);
router.use('/ventas', ventas);

module.exports = router;
