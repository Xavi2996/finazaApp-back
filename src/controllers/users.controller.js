const usersModel = require('../models/users.model')

const getSpecificUser = async(req, res) => {
    try {
        const [result] = await usersModel.selectSpecificUser();
        console.log(result);
        res.json({
            respuesta: true,
            mensaje: 'Usuario recuperado con éxito',
            resultado: result
        });   
    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'Usuario no encontrado',
        })
    }
}

module.exports = {getSpecificUser}