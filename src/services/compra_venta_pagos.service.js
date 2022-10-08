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

const actualizarSaldoVenta = async (venta_id, client_id, saldo) => {
    try{
        const venta = await Venta.findOne({
            where:{
                id: venta_id,
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

const crearCompra = async ({ fecha, proveedor, lugar, n_dte, categoria, cant, kgv_brutos, desbaste, kg_desbaste, kgv_netos, precio_kgv_netos, n_tropa, kg_carne, cant_achuras, precio_venta_achuras, recupero_precio_kg, costo_hac, costo_faena_kg, comision, costo_flete, costo_veps, costo_faena, costo_total, costo_kg, rinde, saldo}) => {
    try {
        const compra = await Compra.create({
            fecha,
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
            cant_achuras,
            precio_venta_achuras,
            recupero_precio_kg,
            costo_hac,
            costo_faena_kg,
            comision,
            costo_flete,
            costo_veps,
            costo_faena,
            costo_total,
            costo_kg,
            rinde,
            saldo
        })
        console.log("------crearCompra 1° console.log------")
        console.log(compra)
        let proveedor_db = await Proveedor.findOne({
            where: {
                nombre: proveedor
            }
        })
        compra.proveedorID = proveedor_db?.id;
        compra.save();
        console.log("------crearCompra 2° console.log------")
        console.log(compra)
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

const getAllPagosByProveedor = async (proveedor) => {
    let pagos = await PagoCompra.findAll({
        where: {
            proveedor: proveedor
        }
    });
    return pagos;
};
const getAllPagosByCompra = async (compra_id) => {
    let pagos = await PagoCompra.findAll({
        where: {
            compra_id: compra_id
        }
    });
    return pagos;
};

const eliminarPagoCompra = async (pagoCompra_id) => {
    try {
        await PagoCompra.destroy({
            where: {
                id: pagoCompra_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const crearPagoCompra = async ({ fecha, proveedor, monto, formaDePago, compra_id }) => {
    try {
        await PagoCompra.create({
            fecha,
            proveedor,
            monto,
            formaDePago,
            compra_id,
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


const getAllPagosByFrigorifico = async (frigorifico) => {
    let pagos = await PagoFaena.findAll({
        where: {
            frigorifico: frigorifico
        }
    });
    return pagos;
};
const getAllPagosByFaena = async (faena_id) => {
    let pagos = await PagoFaena.findAll({
        where: {
            faena_id: faena_id
        }
    });
    return pagos;
};

const eliminarPagoFaena = async (pagoFaena_id) => {
    try {
        await PagoFaena.destroy({
            where: {
                id: pagoFaena_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const crearPagoFaena = async ({ frigorifico, fecha, monto, formaDePago, faena_id }) => {
    try {
        const pagoFaena = await PagoFaena.create({
            fecha,
            frigorifico,
            monto,
            formaDePago,
            faena_id,
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const getAllPagosByCliente = async (cliente) => {
    let pagos = await PagoVenta.findAll({
        where: {
            cliente: cliente
        }
    });
    return pagos;
};
const getAllPagosByVenta = async (venta_id) => {
    let pagos = await PagoVenta.findAll({
        where: {
            venta_id: venta_id
        }
    });
    return pagos;
};

const eliminarPagoVenta = async (pagoVenta_id) => {
    try {
        await PagoVenta.destroy({
            where: {
                id: pagoVenta_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const crearPagoVenta = async ({ cliente, fecha, monto, formaDePago, venta_id }) => {
    try {
        const pagoVenta = await PagoVenta.create({
            fecha,
            cliente,
            monto,
            formaDePago,
            venta_id,
        })
        let cliente_db = await Cliente.findOne({
            where: {
                nombre: cliente
            }
        })
        pagoVenta.cliente = cliente_db?.nombre;
        pagoVenta.save();
        return true;
    } catch (e) {
        console.log(e);
        return false;
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
    getAllPagosByProveedor,
    getAllPagosByCompra,
    eliminarPagoCompra,
    crearPagoCompra,
    crearPagoFaena,
    getAllPagosByFrigorifico,
    getAllPagosByFaena,
    eliminarPagoFaena,
    crearPagoVenta,
    getAllPagosByCliente,
    getAllPagosByVenta,
    eliminarPagoVenta
};