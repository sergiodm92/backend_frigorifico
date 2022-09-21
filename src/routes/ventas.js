const { Router } = require('express');

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const {
    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente,
    crearVenta,
    actualizarSaldoVenta,
    eliminarVenta
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

route.get('/all/:client_id', async (req, res) => {
    const { client_id } = req.params;

    try {
        if (!Number.isInteger(parseInt(client_id))) {
            return res.status(400).send(customResponseError("El id debe ser un número entero", 400));
        }
    
        const ventas = await getAllVentasPorIDCliente(client_id);
        
        if (ventas.length > 0) {
            return res.send(customResponseExito(ventas));
        }
        return res.status(400).send(customResponseError("No se han encontrado ventas", 404));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la venta", 400));
    }

    if(await crearVenta(req.body)){
        return res.status(201).send(customResponseExito("Venta creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la venta", 400));
})

route.put('/', async(req, res) => {
    const { venta_id, client_id, saldo } = req.body

    try {
        if(!saldo || !client_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(client_id))) {
            return res.status(400).send(customResponseError("El id del cliente debe ser un número entero", 400));
        }

        if(await actualizarSaldoVenta(venta_id, client_id, saldo)){
            return res.status(201).send(customResponseExito("Saldo de venta actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de la venta", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo.", 400));
    }
})

route.delete('/', async (req, res) => {
    const { venta_id } = req.body

    try {
        if(!venta_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(venta_id))) {
            return res.status(400).send(customResponseError("El id de la Venta debe ser un número entero", 400));
        }
        
        if(await eliminarVenta(venta_id)){
            return res.status(200).send(customResponseExito("Venta eliminada con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar la Venta", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;