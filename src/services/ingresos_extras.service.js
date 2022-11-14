const {IngresoExtra}=require('../db')

//-->Tae todos los pagos de todas las ventas
const getAllIngresosExtras = async () => {
    let allPagosVenta = await IngresoExtra.findAll();
    return allPagosVenta;
};

//-->crear un nuevo pago de una venta
const crearIngresoExtra = async ({ fecha, monto, formaDePago, concepto, img_comp }) => {
    try {
        await IngresoExtra.create({
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
const eliminarIngresoExtra = async (id) => {
    try {
        await IngresoExtra.destroy({
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
    getAllIngresosExtras,
    crearIngresoExtra,
    eliminarIngresoExtra
}