const { Router } = require('express');

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const {
    getVentaAchuras,
    getAllVentasAchuras,
    getAllVentasAchurasPorIDCliente,
    getAllVentasAchurasbyName,
    crearVentaAchuras,
    actualizarSaldoVentaAchuras,
    eliminarVentaAchuras
} = require("../services/venta_achuras.service.js")

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllVentasAchuras()))
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json(customResponseError("El id debe ser un número entero", 400));
        }
    
        const ventas = await getVentaAchuras(id);
        
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
    
        const ventas = await getAllVentasAchurasPorIDCliente(client_id);
        
        if (ventas.length > 0) {
            return res.send(customResponseExito(ventas));
        }
        return res.status(400).send(customResponseError("No se han encontrado ventas", 404));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/all/name/:clientName', async (req, res) => {
    const { clientName } = req.params;

    try {
            let ventas = await getAllVentasAchurasbyName(clientName);
            return res.send(customResponseExito(ventas))
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    if(await crearVentaAchuras(req.body)){
        return res.status(201).send(customResponseExito("Venta creada con éxito"));
    }
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la venta", 400));
    }

    return res.status(400).send(customResponseError("Error al crear la venta", 400));
})

route.put('/saldo', async (req, res) => {
    const { id, saldo } = req.body
    try {
        if(!id || !saldo){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }
        if(await actualizarSaldoVentaAchuras(id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Venta actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de Venta", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.delete('/:venta_id', async (req, res) => {
    const { venta_id } = req.params

    try {
        if(await eliminarVentaAchuras(venta_id)){
            return res.status(200).send(customResponseExito("Venta eliminada con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar la Venta", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;