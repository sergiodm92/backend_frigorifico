const { Router } = require('express');

const {
    getProveedor,
    getAllProveedores,
    crearProveedor,
    actualizarSaldoCompra
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

route.post('/', (req, res) => {
    if(!req.body){
        return res.status(400).send(customResponseError("Se necesita información para crear el proveedor", 400));
    }

    if(crearProveedor(req.body)){
        return res.status(201).send(customResponseExito("Proveedor creado con éxito"));
    }
    return res.status(400).send(customResponseError("Error al crear el proveedor", 400));
})

route.put('/', (req, res) => {
    const { proveedor_id, saldo } = req.body

    try {
        if(!saldo || !proveedor_id){
            return res.status(400).send(customResponseError("Se necesita información para procesar la solicitud", 400));
        }

        if (!Number.isInteger(parseInt(proveedor_id))) {
            return res.status(400).send(customResponseError("El id del proveedor debe ser un número entero", 400));
        }

        if(actualizarSaldoCompra(proveedor_id, saldo)){
            return res.status(201).send(customResponseExito("Saldo de compra actualizado con éxito"));
        }
        return res.status(400).send(customResponseError("Error al actualizar el saldo", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo.", 400));
    }
})

module.exports = route;