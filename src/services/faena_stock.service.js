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


module.exports = {
    getAllStock,

    getAllFaenas,
    getAllFaenasPorNTropa
}