const { Router } = require('express');

const {
    getCompra,
    getAllCompras,
    getComprasPorProveedor,
    crearCompra
} = require("../services/compra_venta_pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllCompras()))
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json(customResponseError("El id debe ser un número entero", 400));
        }

        const compras = await getCompra(id);

        if (compras) {
            return res.json(customResponseExito(compras));
        }
        return res.status(404).json(customResponseError("No se ha encontrado la compra", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/all/:proveedor', async (req, res) => {
    const { proveedor } = req.params;

    try {
        const compras = await getComprasPorProveedor(proveedor);

        if (compras.length > 0) {
            return res.send(customResponseExito(compras));
        }
        return res.status(404).send(customResponseError("No se han encontrado compras", 404));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', (req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la compra", 400));
    }

    if(crearCompra(req.body)){
        return res.status(201).send(customResponseExito("Compra creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la compra", 400));
})

module.exports = route;