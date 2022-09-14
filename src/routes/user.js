const { Router } = require('express');

const {
    authRegister,
    authLogin
} = require('../services/user.service');

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(1024).required()
})

const schemaLogin = Joi.object({
    name: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

const route = Router();

route.post('/', async (req, res) => {
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json(customResponseError(error.details[0].message));

    try {
        const token = await authLogin(req.body);
        if (token.length > 100) {
            res.header('auth-token', token).json(token);
        }
        else {
            res.status(400).json(customResponseError("No se pudo iniciar sesión, reintente..."))
        }
    } catch (error) {
        return res.status(400).json(customResponseError(error));
    }
})

route.post('/', async (req, res) => {
    const { error } = schemaRegister.validate(req.body);
    if (error) return res.status(400).json(customResponseError(error.details[0].message));

    try {
        const user = await authRegister(req.body);
        if (typeof token !== 'string') {
            res.status(201).json(user);
        }
        else {
            res.status(400).json(customResponseError("No se ha podido registrar, reintente..."));
        }
    } catch (error) {
        res.status(400).json(customResponseError(error));
    }
})

module.exports = route;