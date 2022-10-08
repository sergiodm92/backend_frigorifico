const { Router } = require('express');

const {
    crearPagoCompra,
    getAllPagosByProveedor,
    getAllPagosByCompra,
    eliminarPagoCompra,
} = require("../services/compra_venta_pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/:proveedor', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosByProveedor()))
})

route.get('/:id', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosByCompra()))
})

route.post('/', async (req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el pago", 400));
    }

    if(await crearPagoCompra(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    
    return res.status(400).send(customResponseError("Error al crear el pago", 400));
})

route.delete('/', async (req, res) => {
    const { pagoCompra_id } = req.body

    try {
        if(!pagoCompra_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(pagoCompra_id))) {
            return res.status(400).send(customResponseError("El id del Pago debe ser un número entero", 400));
        }
        
        if(await eliminarPagoCompra(pagoCompra_id)){
            return res.status(200).send(customResponseExito("Pago de Compra eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar el Pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;



