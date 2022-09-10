const { Router } = require('express');

const {
    getCliente,
    getAllClientes,
    crearCliente
} = require("../services/cliente_proveedor.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllClientes()))
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

route.post('/', (req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el cliente", 400));
    }

    if(crearCliente(req.body)){
        return res.status(201).send(customResponseExito("Cliente creada con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear el cliente", 400));
})

module.exports = route;