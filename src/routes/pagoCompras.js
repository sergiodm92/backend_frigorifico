const { Router } = require('express');

const {
    getAllPagosCompras,
    getAllPagosCompraByID_P,
    getAllPagosCompraByID_C,
    crearPagoCompra,
    eliminarPagoCompra
} = require("../services/pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos de compras
route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosCompras()))
});

//-->Trae todos los pagos de una compra
route.get('/:compraID', async (req, res) => {
    const { compraID } = req.params

    return res.send(customResponseExito(await getAllPagosCompraByID_C(compraID)))
});

//-->trae todos los pagos de un Proveedor
route.get('/all/:proveedorID', async (req, res) => {
    const { proveedorID } = req.params
    return res.send(customResponseExito(await getAllPagosCompraByID_P(proveedorID)))
});

//-->Crear pago de una compra
route.post('/', async (req, res) => {

    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el pago", 400));
    }

    if(await crearPagoCompra(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear pago", 400));
})

//--> eliminar el pago de una compra
route.delete('/', async (req, res) => {
    const { pc_id } = req.body

    try {
        if(!pc_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(pc_id))) {
            return res.status(400).send(customResponseError("El id del pago debe ser un número entero", 400));
        }
        
        if(await eliminarPagoCompra(pc_id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;