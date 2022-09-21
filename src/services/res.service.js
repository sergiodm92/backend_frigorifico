const { Res } = require("../db");

const getAllReses = async () => {
    let allReses = await Res.findAll();
    return allReses;
};

const getAllResesPorCorrelativo = async (correlativo) => {
    let reses = await Res.findAll({
        where: {
            correlativo
        }
    });
    return reses;
};

const getAllResesEnStock = async () => {
    let reses = await Res.findAll({
        where: {
            stock: true
        }
    });
    return reses;
};

const crearRes = async ({ type, correlativo, kg, precio_kg, tropa, stock, id_v }) => {
    try {
        await Res.create({
            type,
            correlativo,
            kg,
            precio_kg,
            tropa,
            stock,
            id_v
        })
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarRes = async (res_id) => {
    try {
        await Res.destroy({
            where: {
                ID: res_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


/* 
const actualizarSaldoFaena = async (faena_id, saldo) => {
    try{
        const faena = await Faena.findOne({
            where:{
                faena_id: faena_id
            }
        });
        faena.saldo = saldo;
        await faena.save();
        return true
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
 */
module.exports = {
    crearRes,
    eliminarRes,
    getAllReses,
    getAllResesPorCorrelativo,
    getAllResesEnStock
}