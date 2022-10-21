const { Router } = require('express');


const {
    getProveedor,
    getAllProveedores,
    crearProveedor,
    actualizarSaldoProveedor,
    eliminarProveedor,
    saldoProveedor
} = require("../services/cliente_proveedor.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllProveedores()))
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json(customResponseError("El id debe ser un número entero", 400));
        }
    
        const compras = await getProveedor(id);
        
        if (compras) {
            return res.json(customResponseExito(compras));
        }
        return res.status(404).json(customResponseError("No se ha encontrado el proveedor", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    try{
        if(await crearProveedor(req.body)){
            
                return res.status(201).send(customResponseExito("Proveedor creado con éxito"));
            }
        if(!req.body){
            return res.status(400).send(customResponseError("Se necesita información para crear el proveedor", 400));
        }

    return res.status(400).send(customResponseError("Error al crear el proveedor", 400));
    }
    catch{
        return res.send("error")
    }
})

route.put('/', async(req, res) => {
    const { proveedor_id, saldo } = req.body

    try {
        if(await actualizarSaldoProveedor(proveedor_id, saldo)){
            return res.status(201).send(customResponseExito("Saldo de proveedor actualizado con éxito"));
        }
        if(!saldo || !proveedor_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(proveedor_id))) {
            return res.status(400).send(customResponseError("El id del proveedor debe ser un número entero", 400));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo.", 400));
    }
})

route.delete('/', async (req, res) => {
    const { proveedor_id } = req.body

    try {
        if(await eliminarProveedor(proveedor_id)){
            return res.status(200).send(customResponseExito("Proveedor eliminado con éxito"));
        }
        if(!proveedor_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(proveedor_id))) {
            return res.status(400).send(customResponseError("El id del Proveedor debe ser un número entero", 400));
        }
        return res.status(400).send(customResponseError("Error al eliminar el Proveedor", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

// route.put('/saldo', async (req, res) => {
//    const { id } = req.params;
//     try {
//         if(await actualizarSaldoProveedor(id, saldo)){
//             return res.status(200).send(customResponseExito("Saldo de Proveedor actualizado con éxito"));
//         }
//         if(!id || !saldo){
//             return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
//         }
//         return res.status(400).send(customResponseError("Error al actualizar el saldo de Proveedor", 400));
//     } catch (error) {
//         return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
//     }
// })

route.get('/saldo/:proveedor', async (req, res) => {
    const { proveedor } = req.params;
    try {
        let saldo = await saldoProveedor(proveedor);
        
        return res.json(customResponseExito(saldo));
        
        // return res.status(400).send(customResponseError("Error al actualizar el saldo de Proveedor", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

module.exports = route;