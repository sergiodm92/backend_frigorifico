const { Router } = require('express');

const {
    getAllFaenas,
    getAllFaenasPorNTropa,
    crearFaena,
} = require("../services/faena_stock.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllFaenas()))
})

route.get('/:tropa', async (req, res) => {
    const { tropa } = req.params;

    try {    
        const faenas = await getAllFaenasPorNTropa(tropa);
        
        if (compras) {
            return res.json(customResponseExito(faenas));
        }
        return res.status(404).json(customResponseError("No se ha encontrado la faena por tropa", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', (req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la faena", 400));
    }

    if(crearFaena(req.body)){
        return res.status(201).send(customResponseExito("Faena creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la faena", 400));
})

module.exports = route;