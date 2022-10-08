const { Router } = require('express');

const {
    crearPagoFaena,
    getAllPagosByFrigorifico,
    getAllPagosByFaena,
    eliminarPagoFaena,
} = require("../services/compra_venta_pagos.service");

const route = Router();

route.get('/:frigorifico', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosByFrigorifico()))
})

route.get('/:id', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosByFaena()))
})

route.post('/', async (req, res) => {
    if(await crearPagoFaena(req.body)){
        return res.status(201).send(customResponseExito("Pago de faena agregado con éxito"));
    }
})

route.delete('/', async (req, res) => {
    const { pagoFaena_id } = req.body

    try {
        if(!pagoFaena_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(pagoFaena_id))) {
            return res.status(400).send(customResponseError("El id del Pago debe ser un número entero", 400));
        }
        
        if(await eliminarPagoFaena(pagoFaena_id)){
            return res.status(200).send(customResponseExito("Pago de Faena eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar el Pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route; 