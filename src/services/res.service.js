const { Res } = require("../db");

const getAllReses = async () => {
    let allReses = await Res.findAll();
    return allReses;
};

const getAllResesPorCorrelativo = async (correlativo) => {
    let reses = await reses.findAll({
        where:{
            correlativo
        }
    });
    return faena;
};

/* const crearFaena = async ({ fecha, tropa, frigorifico, proveedor, detalle, total_kg, total_medias, costo_total }) => {
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
    getAllReses,
    getAllResesPorCorrelativo,
}