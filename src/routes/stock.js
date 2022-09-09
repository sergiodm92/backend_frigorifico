const { Router } = require('express');

const {
    getAllStock,
} = require("../services/faena_stock.service");

const {
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllStock()))
})


module.exports = route;