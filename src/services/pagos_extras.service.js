const {PagoExtra}=require('../db')

//-->Tae todos los pagos de todas las ventas
const getAllPagosExtras = async () => {
    let allPagosVenta = await PagoExtra.findAll();
    return allPagosVenta;
};

//-->crear un nuevo pago de una venta
const crearPagoExtra = async ({ fecha, monto, formaDePago, concepto, img_comp }) => {
    try {
        await PagoExtra.create({
            fecha,
            concepto,
            monto,
            formaDePago,
            img_comp
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago de una venta
const eliminarPagoExtra = async (id) => {
    try {
        await PagoExtra.destroy({
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
    getAllPagosExtras,
    crearPagoExtra,
    eliminarPagoExtra
}