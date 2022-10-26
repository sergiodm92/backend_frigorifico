const { Router } = require('express');

const {
    getAllIngresosExtras,
    crearIngresoExtra,
    eliminarIngresoExtra
} = require("../services/ingresos_extras.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos extras
route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllIngresosExtras()))
    }
    catch{
        return res.send("error")
    }
});

//-->Crear pago extra
route.post('/', async (req, res) => {
    try{
        if(await crearIngresoExtra(req.body)){
            return res.status(201).send(customResponseExito("Pago creado con éxito"));
        }
        if(!req.body){
            return res.status(400).send(customResponseError("Se necesita información para crear el pago", 400));
        }

        return res.status(400).send(customResponseError("Error al crear pago", 400));
    }
    catch{
        return res.send("error")
    }
})

//--> eliminar el pago extra
route.delete('/', async (req, res) => {
    const { id } = req.body

    try {
        if(await eliminarIngresoExtra(id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
        if(!id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).send(customResponseError("El id del pago debe ser un número entero", 400));
        }

        return res.status(400).send(customResponseError("Error al eliminar pago", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;