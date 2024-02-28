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

const getFavIngreso = async(req, res) => {
    try {
        const [result] = await usersModel.selectFavIngreso();
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

const getFavEgreso = async(req, res) => {
    try {
        const [result] = await usersModel.selectFavEgreso();
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
    // try {
    //     const [result] = await usersModel.insertCatIngresos(req.body.categoria);
    //     const [respuesta] = await usersModel.selectCatIngreso();
    //     res.json({
    //         respuesta: true,
    //         mensaje: 'Categorías de ingreso obtenidas con éxito',
    //         resultado: respuesta
    //     });
    // } catch (error) {
    //     if (error.code == 'ER_DUP_ENTRY') {
    //         res.json({
    //             respuesta: false,
    //             mensaje: 'La categoría ya existe',
    //             resultado: null
    //         });   
    //     }
    // }
}

const postCatEgreso = async(req, res) => {
    // try {
    //     const [result] = await usersModel.insertCatEgresos(req.body.categoria);
    //     const [respuesta] = await usersModel.selectCatEgreso();
    //     res.json({
    //         respuesta: true,
    //         mensaje: 'Categorías de egreso obtenidas con éxito',
    //         resultado: respuesta
    //     });
    // } catch (error) {
    //     if (error.code == 'ER_DUP_ENTRY') {
    //         res.json({
    //             respuesta: false,
    //             mensaje: 'La categoría ya existe',
    //             resultado: null
    //         });   
    //     }
    // }
}

const postFavEgreso = async(req, res) => {
    try {
        const [result] = await usersModel.insertFavEgresos(req.body.categoria);
        const [respuesta] = await usersModel.selectFavEgreso();
        res.json({
            respuesta: true,
            mensaje: 'Categorías de egreso obtenidas con éxito',
            resultado: respuesta
        });
    } catch (error) {
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'El favorito ya existe',
                resultado: null
            });   
        }
    }
}

const postFavIngreso = async (req, res) => {
    try {
        const [result] = await usersModel.insertFavIngresos(req.body.categoria);
        const [respuesta] = await usersModel.selectFavIngreso();
        res.json({
            respuesta: true,
            mensaje: 'Categorías de ingreso obtenidas con éxito',
            resultado: respuesta
        });
    } catch (error) {
        console.log(error);
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'El favorito ya existe',
                resultado: null
            });   
        }
    }
}

const deleteFavIngreso = async (req, res) => {
    try {
        const [result] = await usersModel.deleteFavIngresos(req.params.id);
        const [respuesta] = await usersModel.selectFavIngreso();
        
        res.json({
            respuesta: true,
            mensaje: 'Favorito eliminado con éxito',
            resultado: respuesta
        });
    } catch (error) {
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'El favorito ya existe',
                resultado: null
            });   
        }
    }
}

const deleteFavEgreso = async (req, res) => {
    try {
        const [result] = await usersModel.deleteFavEgresos(req.params.id);
        const [respuesta] = await usersModel.selectFavEgreso();
        
        res.json({
            respuesta: true,
            mensaje: 'Favorito eliminado con éxito',
            resultado: respuesta
        });
    } catch (error) {
        if (error.code == 'ER_DUP_ENTRY') {
            res.json({
                respuesta: false,
                mensaje: 'El favorito ya existe',
                resultado: null
            });   
        }
    }
}

module.exports = {getSpecificUser, getFavIngreso, getFavEgreso,postCatIngreso, postCatEgreso,deleteFavIngreso,deleteFavEgreso,postFavEgreso,postFavIngreso}