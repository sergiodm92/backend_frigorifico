const { Compra, Venta, Cliente, Proveedor} = require("../db");


const getAllVentas = async () => {
    let allVentas = await Venta.findAll();
    return allVentas;
};

const getVenta = async (id) => {
    let venta = await Venta.findByPk(id);
    return venta;
};

const getAllVentasPorIDCliente = async (client_id) => {
    let ventas = await Venta.findAll({
        where: {
            id_cliente: client_id
        }
    });
    return ventas;
};

const crearVenta = async ({ fecha, cliente, detalle, saldo }) => {
    try {
        const venta = await Venta.create({
            fecha,
            cliente,
            detalle,
            saldo
        })

        let cliente_db = await Cliente.findOne({
            where: {
                nombre: cliente
            }
        })

        venta.clienteID = cliente_db.id;

        await venta.save();
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarVenta = async (venta_id) => {
    try {
        await Venta.destroy({
            where: {
                id: venta_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

    const actualizarSaldoVenta = async (id, saldo) => {
        try {
            await Venta.update(
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

//--------------------------------

//-------------------------

    const actualizarSaldoCompra = async (id, saldo) => {
        try {
            await Compra.update(
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

const getAllCompras = async () => {
    let allCompras = await Compra.findAll();
    return allCompras;
};

const getCompra = async (id) => {
    let compra = await Compra.findByPk(id);
    return compra;
};

const getComprasPorProveedor = async (proveedor) => {
    let compras = await Compra.findAll({
        where: {
            proveedor: proveedor
        }
    });
    return compras;
};

const crearCompra = async ({ fecha, proveedor, lugar, n_dte,cant_total,kgv_brutos_totales,kgv_netos_totales,kg_carne_totales, cant_achuras,precio_venta_achuras_unit,recupero_precio_kg,costo_total_hac, comision, costo_flete,costo_veps_unit, saldo,grupos}) => {
    try {
        const compra = await Compra.create({
            fecha,
            proveedor,
            lugar,
            n_dte,
            cant_total,
            kgv_brutos_totales,
            saldo,
            kgv_netos_totales,
            kg_carne_totales,
            cant_achuras,
            precio_venta_achuras_unit,
            recupero_precio_kg,
            costo_total_hac,
            comision,
            costo_flete,
            costo_veps_unit,
            grupos
        })
        let proveedor_db = await Proveedor.findOne({
            where: {
                nombre: proveedor
            }
        })
        compra.proveedorID = proveedor_db?.id;
        compra.save();
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarCompra = async (compra_id) => {
    try {
        await Compra.destroy({
            where: {
                id: compra_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


module.exports = {
    getCompra,
    getAllCompras,
    getComprasPorProveedor,
    crearCompra,
    eliminarCompra,
    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente,
    crearVenta,
    eliminarVenta,
    actualizarSaldoVenta,
    actualizarSaldoCompra
};