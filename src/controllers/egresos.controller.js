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

const createEgresos = async (req, res) => {
    //console.log(req.body);
    const { cantidad, fecha, categoria, usuario } = req.body; 
    
    try {
        const [existEgreso] = await egresosModel.findEgresos(categoria);
        if (existEgreso.length == 0) {
            const [EgresoDetalle] = await egresosModel.insertEgresos(categoria);
            const id = EgresoDetalle.insertId;            
            const [result] = await egresosModel.createEgresos(cantidad, fecha, id, usuario);
            res.json({
                respuesta: true,
                mensaje: 'Egreso no existe, agregado correctamente',
                resultado: true
            });
        } else {
            const [result] = await egresosModel.createEgresos(cantidad, fecha, existEgreso[0].id, usuario);
            res.json({
            respuesta: true,
            mensaje: 'Egreso existe, agregado correctamente',
            resultado: true
            });
        }
        console.log(existEgreso);
        console.log(existEgreso[0].id);
    } catch (error) {
            res.json({
                respuesta: false,
                mensaje: 'Falla en el servicio',
                resultado: error
            })
        }
}
const editEgresos = (req, res) => {
    res.send('Funciona editegresos');
}
const deleteEgresos = (req, res) => {
    res.send('Funciona deleteegresos');
}

module.exports = {getAllEgresos,createEgresos,editEgresos,deleteEgresos, getEgresosMonth, getEgresosYear}