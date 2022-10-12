const { Router } = require('express');

const {
    getAllPagosFaenas,
    crearPagoFaena,
    getAllPagosFaenasByF,
    getAllPagosFaenaByID_F,
    eliminarPagoFaena
} = require("../services/pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos de faenas
route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllPagosFaenas()))
});

//-->Trae todos los pagos de una faena
route.get('/:faenaID', async (req, res) => {
    const { faenaID } = req.params

    return res.send(customResponseExito(await getAllPagosFaenaByID_F(faenaID)))
});

//-->trae todos los pagos de un Frigorifico
route.get('/all/:frigorifico', async (req, res) => {
    const { frigorifico } = req.params
    return res.send(customResponseExito(await getAllPagosFaenasByF(frigorifico)))
});

//-->Crear pago de una faena
route.post('/', async (req, res) => {

    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el pago", 400));
    }

    if(await crearPagoFaena(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear el pago", 400));
})

//--> eliminar el pago de una faena
route.delete('/', async (req, res) => {
    const { pf_id } = req.body

    try {
        if(!pf_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(pf_id))) {
            return res.status(400).send(customResponseError("El id del pago debe ser un número entero", 400));
        }
        
        if(await eliminarPagoFaena(pf_id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;