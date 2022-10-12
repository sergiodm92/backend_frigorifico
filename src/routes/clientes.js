const { Router } = require('express');

const {
    getCliente,
    getAllClientes,
    crearCliente,
    eliminarCliente,
    actualizarSaldoCliente
} = require("../services/cliente_proveedor.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllClientes()))
    }
    catch{
        return res.send("Error al traer los clientes");
    }
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json(customResponseError("El id debe ser un número entero", 400));
        }
    
        const compras = await getCliente(id);
        
        if (compras) {
            return res.json(customResponseExito(compras));
        }
        return res.status(404).json(customResponseError("No se ha encontrado el cliente", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    try{
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el cliente", 400));
    }

    if(await crearCliente(req.body)){
        return res.status(201).send(customResponseExito("Cliente creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear el cliente", 400));
    }
    catch{
        return res.status(400).send(customResponseError("Error al crear el cliente", 400));
    }
})

route.delete('/', async (req, res) => {
    const { cliente_id } = req.body

    try {
        if(!cliente_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(cliente_id))) {
            return res.status(400).send(customResponseError("El id del Cliente debe ser un número entero", 400));
        }
        
        if(await eliminarCliente(cliente_id)){
            return res.status(200).send(customResponseExito("Cliente eliminado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al eliminar el Cliente", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.put('/saldo', async (req, res) => {
    const { id, saldo } = req.body
    try {
        if(!id || !saldo){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }
        if(await actualizarSaldoCliente(id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Cliente actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo de Cliente", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})


module.exports = route;