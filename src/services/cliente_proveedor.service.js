const e = require("express");
const { Cliente, Proveedor } = require("../db");


const getAllClientes = async () => {
    let allClientes = await Cliente.findAll();
    return allClientes;
};

const getCliente = async (id) => {
    let venta = await Cliente.findByPk(id);
    return venta;
};

const crearCliente = async ({ nombre, telefono, email, direccion, cuil}) => {
    try {
        await Cliente.create({
            nombre,
            telefono,
            email,
            direccion,
            cuil
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarCliente = async (cliente_id) => {
    try {
        await Cliente.destroy({
            where: {
                id: cliente_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const getAllProveedores = async () => {
    let allProveedores = await Proveedor.findAll();
    return allProveedores;
};

const getProveedor = async (id) => {
    let proveedor = await Proveedor.findByPk(id);
    return proveedor;
};

const crearProveedor = async ({ nombre, telefono, email, direccion, cuil }) => {
    try {
        await Proveedor.create({
            nombre,
            telefono,
            email,
            direccion,
            cuil
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarProveedor = async (proveedor_id) => {
    try {
        await Proveedor.destroy({
            where: {
                id: proveedor_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

    const editarCliente = async (id, nombre, telefono, email, direccion, cuil) => {
        try {
            await Cliente.update(
                {   
                    nombre,
                    telefono,
                    email,
                    direccion,
                    cuil
                },
                    {
                        where:{
                            id
                        }
                    }
                )
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    const editarProveedor = async (id, nombre, telefono, email, direccion, cuil) => {
        try {
            await Proveedor.update(
                {   
                    nombre,
                    telefono,
                    email,
                    direccion,
                    cuil
                },
                    {
                        where:{
                            id
                        }
                    }
                )
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };


module.exports = {
    getAllClientes,
    getCliente,
    crearCliente,
    eliminarCliente,
    getAllProveedores,
    getProveedor,
    crearProveedor,
    eliminarProveedor,
    editarCliente,
    editarProveedor
}
