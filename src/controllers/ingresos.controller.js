const ingresosModel = require('../models/ingresos.model');

//Revusar si este servicio funciona
const getAllIngresos = async(req, res) => {
    try {
        const [result] = await ingresosModel.selectAllIngresos();
        console.log(result);
            res.json({
            respuesta: false,
            mensaje: 'Datos encontrados',
            resultado: result
        })   
    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'Falla en el servicio',
            resultado: error
        })
    }
}

const getIngresosYear = async (req, res) => {
    console.log(req.body);
    const {year, id} = req.body
    try {
        const [result] = await ingresosModel.selectIngresosYear(year,id);
        if (result.length == 0) {
            res.json({
                respuesta: false,
                mensaje: 'No se encuentra información en esta fecha',
                resultado: 'No data'
            })
        } else {
            res.json({
            respuesta: true,
            mensaje: 'Datos encontrados',
            resultado: result
        })  
        }
    } catch (error) {
            res.json({
                respuesta: false,
                mensaje: 'Falla en el servicio',
                resultado: error
            })
    }
}

const getIngresosMonth = async(req, res) => {
    console.log(req.body);
    const { year, id, month } = req.body
    if (month == 0) {
        try {
        const [result] = await ingresosModel.selectIngresosYear(year,id);
        if (result.length == 0) {
            res.json({
                respuesta: false,
                mensaje: 'No se encuentra información en esta fecha',
                resultado: 'No data'
            })
        } else {
            res.json({
            respuesta: true,
            mensaje: 'Datos encontrados',
            resultado: result
        })  
        }
    } catch (error) {
            res.json({
                respuesta: false,
                mensaje: 'Falla en el servicio',
                resultado: error
            })
    }
    }else{
    try {
        const [result] = await ingresosModel.selectIngresosMonth(year,id,month);
        if (result.length == 0) {
            res.json({
                respuesta: false,
                mensaje: 'No se encuentra información en esta fecha',
                resultado: 'No data'
            })
        } else {
            res.json({
            respuesta: true,
            mensaje: 'Datos encontrados',
            resultado: result
        })  
        }
    } catch (error) {
            res.json({
                respuesta: false,
                mensaje: 'Falla en el servicio',
                resultado: error
            })
        }
        }
}
const createIngresos = (req, res) => {
    res.send('Funciona createIngresos');
}
const editIngresos = (req, res) => {
    res.send('Funciona editIngresos');
}
const deleteIngresos = (req, res) => {
    res.send('Funciona deleteIngresos');
}

module.exports = {getAllIngresos,createIngresos,editIngresos, deleteIngresos, getIngresosYear, getIngresosMonth}