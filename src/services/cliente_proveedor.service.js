const e = require("express");
const { Cliente, Proveedor, Compra } = require("../db");


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

const crearProveedor = async ({ saldo, nombre, telefono, email, direccion, cuil }) => {
    try {
        await Proveedor.create({
            nombre,
            telefono,
            email,
            direccion,
            cuil,
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


const actualizarSaldoCliente = async (id, saldo) => {
    try {
        await Cliente.update(
            { saldo },
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

const actualizarSaldoProveedor = async (id, saldo) => {
    try {
        await Proveedor.update(
            { saldo },
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

const saldoProveedor = async (proveedor) => {
try{
    let saldo = 0
    let allCompras = await Compra.findAll();
    allCompras.map((a)=>{if(a.proveedor==proveedor){
        saldo +=a.saldo
        }})
    return saldo;
}
catch(e){
    console.log(e)
}
};


module.exports = {
    getAllClientes,
    getCliente,
    crearCliente,
    eliminarCliente,
    saldoProveedor,
    getAllProveedores,
    getProveedor,
    crearProveedor,
    actualizarSaldoCliente,
    actualizarSaldoProveedor,
    eliminarProveedor
}
