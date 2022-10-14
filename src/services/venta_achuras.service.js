const {VentaAchura, Cliente} = require ('../db')

const getAllVentasAchuras = async () => {
    try{
        let allVentas = await VentaAchura.findAll();
        return allVentas;
    }
    catch(err){
        return err
    }
};

const getVentaAchuras = async (id) => {
    let venta = await VentaAchura.findByPk(id);
    return venta;
};

const getAllVentasAchurasPorIDCliente = async (client_id) => {
    let ventas = await VentaAchura.findAll({
        where: {
            id_cliente: client_id
        }
    });
    return ventas;
};

const crearVentaAchuras = async ({ fecha, clien, cantidad, precioUnitario, total, saldo }) => {
    try {
        let venta = await VentaAchura.create({
            fecha,
            clien,
            cantidad,
            precioUnitario,
            total,
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

const eliminarVentaAchuras = async (venta_id) => {
    try {
        await VentaAchura.destroy({
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

    const actualizarSaldoVentaAchuras = async (id, saldo) => {
        try {
            await VentaAchura.update(
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

    module.exports = {
        getVentaAchuras,
        getAllVentasAchuras,
        getAllVentasAchurasPorIDCliente,
        crearVentaAchuras,
        actualizarSaldoVentaAchuras,
        eliminarVentaAchuras
    };