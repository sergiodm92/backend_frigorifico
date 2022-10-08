const { Router } = require('express');

const {
    crearPagoVenta,
    getAllPagosByCliente,
    getAllPagosByVenta,
    eliminarPagoVenta,
} = require("../services/compra_venta_pagos.service");

const route = Router();

route.get('/:cliente', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosByCliente()))
})

route.get('/:id', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosByVenta()))
})

route.post('/', async (req, res) => {
    if(await crearPagoVenta(req.body)){
        return res.status(201).send(customResponseExito("Pago de venta agregado con éxito"));
    }
})

route.delete('/', async (req, res) => {
    const { pagoVenta_id } = req.body

    try {
        if(!pagoVenta_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(pagoVenta_id))) {
            return res.status(400).send(customResponseError("El id del Pago debe ser un número entero", 400));
        }
        
        if(await eliminarPagoVenta(pagoVenta_id)){
            return res.status(200).send(customResponseExito("Pago de Venta eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar el Pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;