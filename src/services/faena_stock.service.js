const { Faena, Stock } = require("../db");


const getAllStock = async () => {
    let allStock = await Stock.findAll();
    return allStock;
};


const getAllFaenas = async () => {
    let allFaenas = await Faena.findAll();
    return allFaenas;
};

const getAllFaenasPorNTropa = async (nTropa) => {
    let faena = await Faena.findAll({
        where:{
            tropa: nTropa
        }
    });
    return faena;
};

const crearFaena = async ({ fecha, tropa, frigorifico, proveedor, detalle, total_kg, total_medias, costo_total }) => {
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
        })
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
    crearFaena
}