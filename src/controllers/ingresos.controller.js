const ingresosModel = require('../models/ingresos.model');

//Revusar si este servicio funciona
const getAllIngresos = async(req, res) => {
    try {
        const [result] = await ingresosModel.selectAllIngresos();
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
const createIngresos = async (req, res) => {
    //console.log(req.body);
    const { cantidad, fecha, categoria, usuario } = req.body; 
    
    try {
        const [existIngreso] = await ingresosModel.findIngresos(categoria);
        if (existIngreso.length == 0) {
            const [ingresoDetalle] = await ingresosModel.insertIngresos(categoria);
            const id = ingresoDetalle.insertId;            
            const [result] = await ingresosModel.createIngresos(cantidad, fecha, id, usuario);
            res.json({
                respuesta: true,
                mensaje: 'Ingreso no existe, agregado correctamente',
                resultado: true
            });
        } else {
            const [result] = await ingresosModel.createIngresos(cantidad, fecha, existIngreso[0].id, usuario);
            res.json({
            respuesta: true,
            mensaje: 'Ingreso existe, agregado correctamente',
            resultado: true
            });
        }
        console.log(existIngreso);
        console.log(existIngreso[0].id);
    } catch (error) {
            res.json({
                respuesta: false,
                mensaje: 'Falla en el servicio',
                resultado: error
            })
        }
}
const editIngresos = (req, res) => {
    res.send('Funciona editIngresos');
}
const deleteIngresos = (req, res) => {
    res.send('Funciona deleteIngresos');
}

module.exports = {getAllIngresos,createIngresos,editIngresos, deleteIngresos, getIngresosYear, getIngresosMonth}