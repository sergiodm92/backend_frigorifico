const { Router } = require('express');

const {
    getAllReses,
    getAllResPorCorrelativo,
} = require("../services/res.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllReses()))
});

route.get('/:correlativo', async (req, res) => {
    const { correlativo } = req.params;

    try {
        const reses = await getAllResPorCorrelativo(correlativo);
        
        if (reses) {
            return res.json(customResponseExito(correlativo));
        }
        return res.status(404).json(customResponseError("No se ha encontrado la res por correlativo", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
});

/* route.post('/', (req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la faena", 400));
    }

    if(crearFaena(req.body)){
        return res.status(201).send(customResponseExito("Faena creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la faena", 400));
})

route.put('/', (req, res) => {
    const { faena_id, saldo } = req.body

    try {
        if(!saldo || !faena_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(faena_id))) {
            return res.status(400).send(customResponseError("El id de la faena debe ser un número entero", 400));
        }

        if(actualizarSaldoFaena(faena_id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de faena actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de la faena", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
}) */

module.exports = route;