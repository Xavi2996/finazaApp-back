const usersModel = require('../models/users.model')

const getSpecificUser = async(req, res) => {
    try {
        const [result] = await usersModel.selectSpecificUser();
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

const getCatIngreso = async(req, res) => {
    try {
        const [result] = await usersModel.selectCatIngreso();
        res.json({
            respuesta: true,
            mensaje: 'Categorías de ingreso obtenidas con éxito',
            resultado: result
        });   
    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'No se encontraro categorías de ingreso',
        })
    }
}

const getCatEgreso = async(req, res) => {
    try {
        const [result] = await usersModel.selectCatEgreso();
        console.log(result);
        res.json({
            respuesta: true,
            mensaje: 'Categorías de egreso obtenidas con éxito',
            resultado: result
        });   
    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'No se encontraro categorías de egreso',
        })
    }
}

const postCatIngreso = async(req, res) => {
    try {
        const [result] = await usersModel.insertCatIngresos(req.body.categoria);
        const [respuesta] = await usersModel.selectCatIngreso();
        res.json({
            respuesta: true,
            mensaje: 'Categorías de ingreso obtenidas con éxito',
            resultado: respuesta
        });
    } catch (error) {
        console.log(error.code);
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'La categoría ya existe',
                resultado: null
            });   
        }
    }
}

const postCatEgreso = async(req, res) => {
    try {
        const [result] = await usersModel.insertCatEgresos(req.body.categoria);
        const [respuesta] = await usersModel.selectCatEgreso();
        res.json({
            respuesta: true,
            mensaje: 'Categorías de egreso obtenidas con éxito',
            resultado: respuesta
        });
    } catch (error) {
        console.log(error.code);
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'La categoría ya existe',
                resultado: null
            });   
        }
    }
}

const deleteCatIngreso = async (req, res) => {
    console.log(req.params);
    try {
        const [result] = await usersModel.deleteCatIngresos(req.params.id);
        const [respuesta] = await usersModel.selectCatIngreso();
        
        res.json({
            respuesta: true,
            mensaje: 'Categoría eliminada con éxito',
            resultado: respuesta
        });
    } catch (error) {
        console.log(error.code);
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'La categoría ya existe',
                resultado: null
            });   
        }
    }
}

const deleteCatEgreso = async (req, res) => {
    console.log(req.params);
    try {
        const [result] = await usersModel.deleteCatEgresos(req.params.id);
        const [respuesta] = await usersModel.selectCatEgreso();
        
        res.json({
            respuesta: true,
            mensaje: 'Categoría eliminada con éxito',
            resultado: respuesta
        });
    } catch (error) {
        console.log(error.code);
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'La categoría ya existe',
                resultado: null
            });   
        }
    }
}

module.exports = {getSpecificUser, getCatIngreso, getCatEgreso,postCatIngreso, postCatEgreso,deleteCatIngreso,deleteCatEgreso}