const { Cliente, Proveedor, Compra } = require("../db");


const getAllClientes = async () => {
    let allClientes = await Cliente.findAll();
    return allClientes;
};

const getCliente = async (id) => {
    let venta = await Cliente.findByPk(id);
    return venta;
};

const crearCliente = async ({ nombre, telefono, email, direccion }) => {
    try {
        await Cliente.create({
            nombre,
            telefono,
            email,
            direccion
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
                ID: cliente_id
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

const crearProveedor = async ({ saldo, nombre, telefono, email, direccion }) => {
    try {
        await Proveedor.create({
            nombre,
            telefono,
            email,
            direccion,
            saldo
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
                ID: proveedor_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


const actualizarSaldoCompra = async (proveedor_id, saldo) => {
    try{
        const proveedor = await Proveedor.findByPk(proveedor_id);
        proveedor.saldo = saldo;
        await proveedor.save();
        return true;
    }
    catch (e) {
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
    actualizarSaldoCompra,
    eliminarProveedor
}