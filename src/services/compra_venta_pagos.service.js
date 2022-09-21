const { Compra, Venta, Cliente, Proveedor, PagoCompra, PagoFaena, PagoVenta } = require("../db");


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

const crearVenta = async ({ cliente, detalle, cant, kg_total, precio_kg_prom, total, margen_kg, margen_venta, margen_porciento, saldo }) => {
    try {
        const venta = await Venta.create({
            fecha: new Date(),
            cliente,
            detalle,
            cant,
            kg_total,
            precio_kg_prom,
            total,
            margen_kg,
            margen_venta,
            margen_porciento,
            saldo
        })

        let cliente_db = await Cliente.findOne({
            where: {
                nombre: cliente
            }
        })

        venta.clienteID = cliente_db.ID;

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
                ID: venta_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const actualizarSaldoVenta = async (venta_id, client_id, saldo) => {
    try{
        const venta = await Venta.findOne({
            where:{
                ID: venta_id,
                clienteID: client_id,
            }
        });
        venta.saldo = saldo;
        await venta.save();
        return true
    }
    catch (e) {
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

const crearCompra = async ({ proveedor, lugar, n_dte, categoria, cant, kgv_brutos, desbaste, kg_desbaste, kgv_netos, precio_kgv_netos, n_tropa, kg_carne, kg_achuras, precio_venta, recupero_precio_kg, costo_hac, costo_faena_kg, comision, costo_flete, costo_veps, costo_faena, costo_total, costo_kg }) => {
    try {
        const compra = await Compra.create({
            fecha: new Date(),
            proveedor,
            lugar,
            n_dte,
            categoria,
            cant,
            kgv_brutos,
            desbaste,
            kg_desbaste,
            kgv_netos,
            precio_kgv_netos,
            n_tropa,
            kg_carne,
            kg_achuras,
            precio_venta,
            recupero_precio_kg,
            costo_hac,
            costo_faena_kg,
            comision,
            costo_flete,
            costo_veps,
            costo_faena,
            costo_total,
            costo_kg,
        })
        let proveedor_db = await Proveedor.findOne({
            where: {
                nombre: proveedor
            }
        })
        compra.proveedorID = proveedor_db?.ID;
        compra.save();
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarCompra = async (compra_id) => {
    try {
        await Venta.destroy({
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
};