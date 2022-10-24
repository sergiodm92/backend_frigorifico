const { Faena, Stock, Res, Compra } = require("../db");


const getAllStock = async () => {
    let reses = await Res.findAll({
        where: {
            stock: true
        }
    });
    return reses;
};


const getAllFaenas = async () => {
    let allFaenas = await Faena.findAll();
    return allFaenas;
};

const getAllFaenasPorNTropa = async (nTropa) => {
    let faena = await Faena.findOne({
        where: {
            tropa: nTropa
        }
    });
    return faena;
};

const crearFaena = async ({ tropa, frigorifico, proveedor, detalle,costo_faena_kg, total_kg, total_medias, costo_total, saldo, fecha, estado_compra}) => {

    try {
            await Faena.create({
                fecha,
                tropa,
                frigorifico,
                proveedor,
                detalle,
                total_kg,
                total_medias,
                costo_total,
                saldo,
                estado_compra,
                costo_faena_kg
            })
            return true;

    }
    catch (e) {
        console.log(e);
        return false;
    }

};

const eliminarFaena = async (faena_id) => {
    try {
        await Faena.destroy({
            where: {
                id: faena_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


    const actualizarSaldoFaena = async (id, saldo) => {
        try {
            await Faena.update(
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

    const actualizarEstadoCompraFaena = async (tropa, estado_compra) => {
        try {
            await Faena.update(
                { estado_compra },
                    {
                        where:{
                            tropa
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
    getAllStock,
    getAllFaenas,
    getAllFaenasPorNTropa,
    crearFaena,
    eliminarFaena,
    actualizarSaldoFaena,
    actualizarEstadoCompraFaena
}
