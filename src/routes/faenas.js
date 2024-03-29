const { Router } = require('express');

const {
    getAllFaenas,
    getAllFaenasPorNTropa,
    crearFaena,
    eliminarFaena,
    actualizarSaldoFaena,
    actualizarEstadoCompraFaena
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
            return res.json(customResponseExito(faenas));
        }
        return res.status(404).json(customResponseError("No se ha encontrado la faena por tropa", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async (req, res) => {
    try{
    if(await crearFaena(req.body)){
        return res.status(201).send(customResponseExito("Faena creada con éxito"));
    }
    }
    catch{
        return res.status(400).send(customResponseError("tropa repetida", 400));
    }
 
})

route.put('/saldo', async (req, res) => {
    const { id, saldo } = req.body
    try {
        if(await actualizarSaldoFaena(id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Faena actualizado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.put('/estadoCompra', async (req, res) => {
    const { tropa, estado_compra } = req.body
    try {
        if(await actualizarEstadoCompraFaena(tropa, estado_compra)){
            return res.status(200).send(customResponseExito("Estado de Compra de Faena actualizado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.delete('/', async (req, res) => {
    const { faena_id } = req.body

    try {
        if(await eliminarFaena(faena_id)){
            return res.status(200).send(customResponseExito("Faena eliminada con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;
