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

const crearRes = async ({ type, correlativo, kg, precio_kg, tropa, stock, id_v, categoria, fecha, frigorifico }) => {
    try {
        await Res.create({
            type,
            correlativo,
            kg,
            precio_kg,
            tropa,
            stock,
            categoria,
            id_v,
            fecha,
            frigorifico
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
                id: res_id
            },
            force: true
        });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const actualizarCostoByKg = async (precio_kg, tropa, categoria) => {
    try {
        await Res.update(
            { precio_kg },
                {
                    where:{
                        tropa,
                        categoria
                    }
                }
            )
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const actualizarStock = async (correlativo, stock) => {
    try {
        await Res.update(
            { stock },
                {
                    where:{
                        correlativo
                    }
                }
            )
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const actualizarCuartoRes = async (id, kg, correlativo) => {
    try {
        await Res.update(
            { kg, correlativo },
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
    getAllResesEnStock,
    actualizarCostoByKg,
    actualizarStock,
    actualizarCuartoRes
}