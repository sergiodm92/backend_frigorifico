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

const getAllProveedores = async () => {
    let allProveedores = await Proveedor.findAll();
    return allProveedores;
};

const getProveedor = async (id) => {
    let proveedor = await Proveedor.findByPk(id);
    return proveedor;
};

const crearProveedor = async ({ nombre, telefono, email, direccion }) => {
    try {
        await Proveedor.create({
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

const actualizarSaldoCompra = async (proveedor_id, saldo) => {
    try{
        const compra = await Compra.findOne({
            where:{
                proveedorID: proveedor_id
            }
        });
        compra.saldo = saldo;
        await compra.save();
        return true
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

    getAllProveedores,
    getProveedor,
    crearProveedor,
    actualizarSaldoCompra
}