const { Compra, Venta, Cliente, Proveedor} = require("../db");


const getAllVentas = async () => {
    try {
    let ventas = await Venta.findAll();
        ventas.map(e=>{
            e.dataValues.cant=0
            e.dataValues.kg_total=0
            e.dataValues.total=0
            e.dataValues.margen=0
            e.dataValues.detalle.map(a=>{
                if(a.total_media=="total")e.dataValues.cant++
                if(a.total_media!=="total")e.dataValues.cant+=0.5
                e.dataValues.kg_total+=a.kg*1
                e.dataValues.total+=a.kg*a.precio_kg
                e.dataValues.margen+=a.precio_kg*a.kg-a.costo_kg*a.kg
                })
        })
        
        return ventas;
    }
    catch (e) {
        console.log(e);
        return false;
    }
    }

const getAllVentasUltimos30Dias = async () => {
    try {
        let allVentas = await getAllVentas()
        const fecha = Date.now()-(30*24*3600*1000)
        let ventasUltimos30Dias=[]
        if(allVentas.length>0){
            allVentas.map(e=>{
                if(e.dataValues.fecha>fecha)ventasUltimos30Dias.push(e)
            })
        }
            return ventasUltimos30Dias;
    }
    catch (e) {
        console.log(e);
        return false;
    }
    }


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
    ventas.map(e=>{
        e.dataValues.cant=0
        e.dataValues.kg_total=0
        e.dataValues.total=0
        e.dataValues.margen=0
        e.dataValues.detalle.map(a=>{
            if(a.total_media=="total")e.dataValues.cant++
            if(a.total_media!=="total")e.dataValues.cant+=0.5
            e.dataValues.kg_total+=a.kg
            e.dataValues.total+=a.kg*a.precio_kg
            e.dataValues.margen+=a.precio_kg*a.kg-a.costo_kg*a.kg
            })
    })
    return ventas;
};

const getAllVentasbyName = async (clientName) => {
    let ventas = await Venta.findAll({
        where: {
            cliente: clientName
        }
    });
    ventas.map(e=>{
        e.dataValues.cant=0
        e.dataValues.kg_total=0
        e.dataValues.total=0
        e.dataValues.margen=0
        e.dataValues.detalle.map(a=>{
            if(a.total_media=="total")e.dataValues.cant++
            if(a.total_media!=="total")e.dataValues.cant+=0.5
            e.dataValues.kg_total+=a.kg
            e.dataValues.total+=a.kg*a.precio_kg
            e.dataValues.margen+=a.precio_kg*a.kg-a.costo_kg*a.kg
            })
    })
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
    let compras=[]
    compras = await Compra.findAll({
        where: {
            proveedor: proveedor
        }
    });
    return compras;
};

const crearCompra = async ({ fecha, proveedor, lugar, n_dte,cant_total,kgv_brutos_totales,kgv_netos_totales,kg_carne_totales, cant_achuras,precio_venta_achuras_unit,recupero_precio_kg,costo_total_hac, costo_flete,costo_veps_unit, saldo,grupos}) => {
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
    actualizarSaldoCompra,
    getAllVentasUltimos30Dias,
    getAllVentasbyName
};