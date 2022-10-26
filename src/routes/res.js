const { Router } = require('express');
const { Res } = require("../db");

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
        return res.status(404).json(customResponseError("No se ha encontrado la res por correlativo", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
});

route.post('/', async (req, res) => {
    try{
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la res", 400));
    }

    if(await crearRes(req.body)){
        return res.status(201).send(customResponseExito("Res creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la res", 400));
    }
    catch{
        return res.status(400).send(customResponseError("Error al crear la res", 400));
    }
})

route.delete('/', async (req, res) => {
    const { res_id } = req.body

    try {
        if(!res_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(res_id))) {
            return res.status(400).send(customResponseError("El id de la Res debe ser un número entero", 400));
        }
        
        if(await eliminarRes(res_id)){
            return res.status(200).send(customResponseExito("Res eliminada con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar la Res", 400));
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
        if(!correlativo || !stock ){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }
        if(actualizarStock(correlativo, stock)){
            return res.status(200).send(customResponseExito("Stock de Res actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de la Res", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.put('/cuartoRes', (req, res) => {
    let { id, kg, correlativo } = req.body
    try {
        if(!id || !kg || !correlativo ){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }
        if(actualizarCuartoRes(id, kg, correlativo)){
            return res.status(200).send(customResponseExito("Res actualizada con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de la Res", 400));
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
        else return res.status(400).send(customResponseError("Error al actualizar kg de la Res", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el correlativo que desea buscar es correcto.", 400));
    }
})


module.exports = route;