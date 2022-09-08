const { Compra, Venta, PagoCompra, PagoFaena, PagoVenta } = require("../db");

const getAllVentas = async () => {
    let allVentas = await Venta.findAll();
    return allVentas;
};

const getVenta = async (id) => {
    let allVentas = await Venta.findByPk(id);
    return allVentas;
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

module.exports = {
    getAllCompras,

    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente
}