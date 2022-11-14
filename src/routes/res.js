const { Router } = require('express');

const {
    crearRes,
    getAllReses,
    getAllResesPorCorrelativo,
    getAllResesEnStock,
    eliminarRes,
    actualizarCostoByKg,
    actualizarStock,
    actualizarCuartoRes,
    actualizarKg
} = require("../services/res.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllReses()))
});

route.get('/all_stock', async (req, res) => {
    return res.send(customResponseExito(await getAllResesEnStock()))
});

route.get('/:correlativo', async (req, res) => {
    const { correlativo } = req.params;

    try {
        const reses = await getAllResesPorCorrelativo(correlativo);
        if (reses) {
            return res.json(customResponseExito(reses));
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
});

route.post('/', async (req, res) => {
    try{
    if(await crearRes(req.body)){
        return res.status(201).send(customResponseExito("Res creada con éxito"));
    }
    }
    catch{
        return res.status(400).send(customResponseError("Error al crear la res", 400));
    }
})

route.delete('/', async (req, res) => {
    const { res_id } = req.body

    try {
        if(await eliminarRes(res_id)){
            return res.status(200).send(customResponseExito("Res eliminada con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})


route.put('/', (req, res) => {
    let { precio_kg, tropa, categoria } = req.body
    try {
        if(actualizarCostoByKg(precio_kg, tropa, categoria)){
            return res.status(200).send(customResponseExito("Costo/kg de Res actualizado con éxito"));
        }

    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
}) 

route.put('/stock', (req, res) => {
    let { correlativo, stock } = req.body
    try {
        if(actualizarStock(correlativo, stock)){
            return res.status(200).send(customResponseExito("Stock de Res actualizado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.put('/cuartoRes', (req, res) => {
    let { id, kg, correlativo } = req.body
    try {
        if(actualizarCuartoRes(id, kg, correlativo)){
            return res.status(200).send(customResponseExito("Res actualizada con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.put('/kg', (req, res) => {
    let { correlativo, kg } = req.body
    try {
        if(actualizarKg(correlativo, kg)){
            return res.status(200).send(customResponseExito("Res actualizada con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el correlativo que desea buscar es correcto.", 400));
    }
})


module.exports = route;