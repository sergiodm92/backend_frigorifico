const { Router } = require('express');

const {
    getAllPagosVentas,
    getAllPagosVentaByC,
    getAllPagosVentaByID_V,
    crearPagoVenta,
    eliminarPagoVenta
} = require("../services/pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos de ventas
route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllPagosVentas()))
    }
    catch{
        return res.send("error")
    }
});

//-->Trae todos los pagos de una venta
route.get('/:ventaID', async (req, res) => {
    const { ventaID } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosVentaByID_V(ventaID)))
    }
    catch{
        return res.send("error")
    }
});

//-->trae todos los pagos de un Cliente
route.get('/all/:cliente', async (req, res) => {
    const { cliente } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosVentaByC(cliente)))
    }
    catch{
        return res.send("error")
    }
});

//-->Crear pago de una venta
route.post('/', async (req, res) => {
    try{
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el pago", 400));
    }

    if(await crearPagoVenta(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear pago", 400));
    }
    catch{
        return res.send("error")
    }
})

//--> eliminar el pago de una venta
route.delete('/', async (req, res) => {
    const { pv_id } = req.body

    try {
        if(!pv_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(pv_id))) {
            return res.status(400).send(customResponseError("El id del pago debe ser un número entero", 400));
        }
        
        if(await eliminarPagoVenta(pv_id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;