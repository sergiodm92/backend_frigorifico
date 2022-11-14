const {PagoVentaAchura}=require('../db')

//-->Tae todos los pagos de todas las ventas
const getAllPagosVentasAchuras = async () => {
    let allPagosVenta = await PagoVentaAchura.findAll();
    return allPagosVenta;
};

//-->Tae todos los pagos de todas las ventas de un cliente
const getAllPagosVentaAchurasByC = async (clien) => {
    let pagos = await PagoVentaAchura.findAll({
        where: {
            clien
        }
    });
    return pagos;
};

//-->Tae todos los pagos de una venta
const getAllPagosVentaAchurasByID_V = async (ventaID) => {
    let pagos = await PagoVentaAchura.findAll({
        where: {
            ventaID
        }
    });
    return pagos;
};

//-->crear un nuevo pago de una venta
const crearPagoVentaAchuras = async ({ fecha, monto, formaDePago, clien, ventaID, img_comp }) => {
    try {
        await PagoVentaAchura.create({
            fecha,
            monto,
            formaDePago,
            clien,
            ventaID,
            img_comp
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago de una venta
const eliminarPagoVentaAchuras = async (id) => {
    try {
        await PagoVentaAchura.destroy({
            where: {
                id
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
    getAllPagosVentasAchuras,
    getAllPagosVentaAchurasByC,
    getAllPagosVentaAchurasByID_V,
    crearPagoVentaAchuras,
    eliminarPagoVentaAchuras
}