const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authRegister = async (data) => {
    const isUserExist = await User.findOne({
        where:{
            name: data.name
        }
    });

    if (isUserExist) {
        return 'Email ya registrado';
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(data.password, salt);

    const user = await User.create({
        name: data.name,
        password: password
    });

    try {
        const savedUser = await user.save();
        return savedUser;
    } catch (error) {
       return error;
    }
};

const authLogin = async (data) => {
    const user = await User.findOne({
        where:{
            name: data.name
        }
    });
    if (!user) throw Error('Usuario no encontrado');

    const validPassword = await bcrypt.compare(data.password, user.password);

    if (!validPassword) throw Error('contraseña no válida');

    const token = jwt.sign({
        name: user.name,
        id: user.ID
    }, process.env.TOKEN_SECRET);
    
    return token;
};

module.exports = {
    authLogin,
    authRegister
};