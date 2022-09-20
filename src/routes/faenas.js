const { Router } = require('express');

const {
    getAllFaenas,
    getAllFaenasPorNTropa,
    crearFaena,
    actualizarSaldoFaena,
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
                
        if (faenas) {
            return res.json(customResponseExito(faenas[0]));
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
   if(crearFaena(req.body)===1){
        return res.status(400).send(customResponseError("Error al crear la faena", 400));
    }
     if(crearFaena(req.body)===2){
        return res.status(400).send(customResponseError("tropa repetida", 400));
    }
    if(crearFaena(req.body)===3){
        return res.status(201).send(customResponseExito("Faena creada con éxitoo"));
    }
 
})

route.put('/', async (req, res) => {
    const { faena_id, compra_id, saldo } = req.body

    try {
        if(!saldo || !faena_id || !compra_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(faena_id))) {
            return res.status(400).send(customResponseError("El id de la faena debe ser un número entero", 400));
        }
        
        if (!Number.isInteger(parseInt(compra_id))) {
            return res.status(400).send(customResponseError("El id de la compra debe ser un número entero", 400));
        }

        if(await actualizarSaldoFaena(faena_id, compra_id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de faena actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de la faena", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

module.exports = route;
