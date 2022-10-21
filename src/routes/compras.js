const { Router } = require('express');

const {
    getCompra,
    getAllCompras,
    getComprasPorProveedor,
    crearCompra,
    eliminarCompra,
    actualizarSaldoCompra
} = require("../services/compra_venta.service.js");

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
        return res.status(400).send(customResponseError("Error, compruebe que el proveedor que desea buscar es correcto.", 400));
    }
})

route.post('/', async (req, res) => {
    try{
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la compra", 400));
    }

    if(await crearCompra(req.body)){
        console.log("------console.log de lo que llega por BODY------")
        console.log(req.body)
        return res.status(201).send(customResponseExito("Compra creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la compra", 400));
    }
    catch{
        return res.status(400).send(customResponseError("Error al crear la compra", 400));
    }
})

route.delete('/', async (req, res) => {
    const { compra_id } = req.body

    try {
        if(await eliminarCompra(compra_id)){
            return res.status(200).send(customResponseExito("Compra eliminada con éxito"));
        }
        if(!compra_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }
        if (!Number.isInteger(parseInt(compra_id))) {
            return res.status(400).send(customResponseError("El id de la Compra debe ser un número entero", 400));
        }
            return res.status(400).send(customResponseError("Error al eliminar la Compra", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.put('/saldo', async (req, res) => {
    const { id, saldo } = req.body
    try {
        if(!id || !saldo){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }
        if(await actualizarSaldoCompra(id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Compra actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de Compra", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

module.exports = route;