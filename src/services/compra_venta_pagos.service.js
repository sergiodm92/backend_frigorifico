const { Compra, Venta, PagoCompra, PagoFaena, PagoVenta } = require("../db");


const getAllVentas = async () => {
    let allVentas = await Venta.findAll();
    return allVentas;
};

const getVenta = async (id) => {
    let venta = await Venta.findByPk(id);
    return venta;
};

const getAllVentasPorIDCliente = async (clientID) => {
    let ventas = await Venta.findAll({
        where:{
            id_cliente: clientID
        }
    });
    return ventas;
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
        where:{
            proveedor: proveedor
        }
    });
    return compras;
};

const crearCompra = async (data) => {
    try {
        const compra = await Compra.create({
            fecha: new Date().getDate().toLocaleString(),
            proveedor: data.proveedor,
            lugar: data.lugar,
            n_dte: data.n_dte,
            categoria: data.categoria,
            cant: data.cant,
            kgv_brutos: data.kgv_brutos,
            desbaste: data.desbaste,
            kg_desbaste: data.kg_desbaste,
            kgv_netos: data.kgv_netos,
            $_kgv_netos: data.$_kgv_netos,
            n_tropa: data.n_tropa,
            kg_carne: data.kg_carne,
            kg_achuras: data.kg_achuras,
            $_venta: data.$_venta,
            recupero_$kg: data.recupero_$kg,
            costo_hac: data.costo_hac,
            costo_faena_kg: data.costo_faena_kg,
            comision: data.comision,
            costo_flete: data.costo_flete,
            costo_veps: data.costo_veps,
            costo_faena: data.costo_faena,
            costo_total: data.costo_total,
            costo_kg: data.costo_kg,
        })
        proveedor = await Proveedor.find({
            where:{
                nombre: proveedor
            }
        })
        await compra.addProveedors(proveedor.ID);
        //await compra.addFaena(proveedor.ID);
    } catch (e) {
        console.log(e);
    }
}

/*

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
    $_kgv_netos,
    n_tropa,
    kg_carne,
    kg_achuras,
    $_venta,
    recupero_$kg,
    costo_hac:,
    costo_faena_kg,
    comision,
    costo_flete,
    costo_veps,
    costo_faena,
    costo_total,
    costo_kg,

*/

module.exports = {
    getCompra,
    getAllCompras,
    getComprasPorProveedor,
    crearCompra,

    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente
}