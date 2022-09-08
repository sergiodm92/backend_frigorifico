const { Router } = require('express');

const {
    getAllCompras
} = require("../services/compra_venta_pagos.service");

const route = Router();

route.get('/all', async (req, res) => {
    res.send(await getAllCompras())
})

module.exports = route;