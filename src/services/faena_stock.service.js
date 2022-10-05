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

const crearFaena = async ({ tropa, frigorifico, proveedor, detalle, total_kg, total_medias, costo_total, saldo, fecha}) => {

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
                saldo
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

const actualizarSaldoFaena = async (faena_id, compraId, saldo) => {
    try {
        const faena = await Faena.findByPk(faena_id);
        const compra = await Compra.findByPk(compraId);
        faena.saldo = saldo;
        faena.compraId = compra;
        faena.setCompra(compra);
        await faena.save();
        return true;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = {
    getAllStock,

    getAllFaenas,
    getAllFaenasPorNTropa,
    crearFaena,
    eliminarFaena,
    actualizarSaldoFaena
}
