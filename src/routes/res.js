const { Router } = require('express');

const {
    crearRes,
    getAllReses,
    getAllResesPorCorrelativo,
    getAllResesEnStock,
    eliminarRes
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
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear la res", 400));
    }

    if(await crearRes(req.body)){
        return res.status(201).send(customResponseExito("Res creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear la res", 400));
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

/* 
route.put('/', (req, res) => {
    const { Res_id, saldo } = req.body

    try {
        if(!saldo || !Res_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(Res_id))) {
            return res.status(400).send(customResponseError("El id de la Res debe ser un número entero", 400));
        }

        if(actualizarSaldoRes(Res_id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Res actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de la Res", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
}) */

module.exports = route;