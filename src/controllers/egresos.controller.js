const egresosModel = require('../models/egresos.model')

const getAllEgresos = async(req, res) => {
    try {
        const [result] = await egresosModel.selectAllEgresos();
        res.json(result);   
    } catch (error) {
        res.json(error)
    }
}

const getEgresosYear = async (req, res) => {
    const {year, id} = req.body
    try {
        const [result] = await egresosModel.selectEgresosYear(year,id);
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

const getEgresosMonth = async(req, res) => {
    const { year, id, month } = req.body
    if (month == 0) {
        try {
        const [result] = await egresosModel.selectEgresosYear(year,id);
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
        const [result] = await egresosModel.selectEgresosMonth(year,id,month);
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
const createEgresos = (req, res) => {
    res.send('Funciona createegresos');
}
const editEgresos = (req, res) => {
    res.send('Funciona editegresos');
}
const deleteEgresos = (req, res) => {
    res.send('Funciona deleteegresos');
}

module.exports = {getAllEgresos,createEgresos,editEgresos,deleteEgresos, getEgresosMonth, getEgresosYear}