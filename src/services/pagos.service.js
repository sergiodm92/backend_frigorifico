const { 
        PagoCompra,
        PagoFaena,                
        PagoVenta                
                        } = require("../db");
                        
//-------------PAGOS COMPRAS----------------------
//-->Tae todos los pagos de todas las compras
const getAllPagosCompras = async () => {
    let allPagosCompra = await PagoCompra.findAll();
    return allPagosCompra;
};

//-->Tae todos los pagos de todas las compras de un proveedor
const getAllPagosCompraByP = async (proveedor) => {
    let pagos = await PagoCompra.findAll({
        where: {
            proveedor
        }
    });
    return pagos;
};

//-->Tae todos los pagos de una compra
const getAllPagosCompraByID_C = async (compraID) => {
    let pagos = await PagoCompra.findAll({
        where: {
            compraID
        }
    });
    return pagos;
};

//-->crear un nuevo pago
const crearPagoCompra = async ({ fecha, monto, formaDePago, proveedor, compraID }) => {
    try {
        await PagoCompra.create({
            fecha,
            monto,
            formaDePago,
            proveedor,
            compraID
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago
const eliminarPagoCompra = async (id) => {
    try {
        await PagoCompra.destroy({
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

//-------------------PAGOS FAENAS--------------------------
//-->Tae todos los pagos de todas las faenas
const getAllPagosFaenas = async () => {
    let allPagosFaenas = await PagoFaena.findAll();
    return allPagosFaenas;
};


//-->Tae todos los pagos de una faeneada
const getAllPagosFaenaByID_F = async (faenaID) => {
    let pagos = await PagoFaena.findAll({
        where: {
            faenaID
        }
    });
    return pagos;
};

//-->Tae todos los pagos de todas las faenas de un frigorifico
const getAllPagosFaenasByF = async (frigorifico) => {
    let pagos = await PagoFaena.findAll({
        where: {
            frigorifico
        }
    });
    return pagos;
};

//-->crear un nuevo pago
const crearPagoFaena = async ({ fecha, monto, formaDePago, faenaID, frigorifico }) => {
    try {
        await PagoFaena.create({
            fecha,
            monto,
            formaDePago,
            frigorifico,
            faenaID
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

//-->eliminar un pago
const eliminarPagoFaena = async (id) => {
    try {
        await PagoFaena.destroy({
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

//-------------------PAGOS VENTAS--------------------------

//-->Tae todos los pagos de todas las ventas
const getAllPagosVentas = async () => {
    let allPagosVenta = await PagoVenta.findAll();
    return allPagosVenta;
};

//-->Tae todos los pagos de todas las ventas de un cliente
const getAllPagosVentaByC = async (cliente) => {
    let pagos = await PagoVenta.findAll({
        where: {
            cliente
        }
    });
    return pagos;
};

//-->Tae todos los pagos de una venta
const getAllPagosVentaByID_V = async (ventaID) => {
    let pagos = await PagoVenta.findAll({
        where: {
            ventaID
        }
    });
    return pagos;
};

//-->crear un nuevo pago de una venta
const crearPagoVenta = async ({ fecha, monto, formaDePago, cliente, ventaID }) => {
    try {
        await PagoVenta.create({
            fecha,
            monto,
            formaDePago,
            cliente,
            ventaID
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago de una venta
const eliminarPagoVenta = async (id) => {
    try {
        await PagoVenta.destroy({
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
    getAllPagosCompras,
    getAllPagosCompraByP,
    crearPagoCompra,
    getAllPagosCompraByID_C,
    eliminarPagoCompra,
    getAllPagosFaenas,
    getAllPagosFaenaByID_F,
    getAllPagosFaenasByF,
    crearPagoFaena,
    eliminarPagoFaena,
    getAllPagosVentas,
    getAllPagosVentaByC,
    getAllPagosVentaByID_V,
    crearPagoVenta,
    eliminarPagoVenta
}



