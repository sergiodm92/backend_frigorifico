const { Router } = require('express');

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const {
    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente
} = require("../services/compra_venta_pagos.service");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllVentas()))
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json(customResponseError("El id debe ser un número entero", 400));
        }
    
        const ventas = await getVenta(id);
        
        if (ventas) {
            return res.json(customResponseExito(ventas));
        }
        return res.status(404).json(customResponseError("No se ha encontrado la venta", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/all/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).send(customResponseError("El id debe ser un número entero", 400));
        }
    
        const ventas = await getAllVentasPorIDCliente(id);
        
        if (ventas.length > 0) {
            return res.send(customResponseExito(ventas));
        }
        return res.status(400).send(customResponseError("No se han encontrado ventas", 404));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;