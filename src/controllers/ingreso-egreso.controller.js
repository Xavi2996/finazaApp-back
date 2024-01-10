const ingresoModel = require('../models/ingresos.model');
const egresoModel = require('../models/egresos.model');

const getTotal = async (req, res) => {
    let ingresosTotal = 0;
    let egresosTotal = 0;
    try {
        const [ingresos] = await ingresoModel.selectAllIngresos();
        const [egresos] = await egresoModel.selectAllEgresos();
        ingresos.forEach(element => {
            ingresosTotal = ingresosTotal + Number(element.cantidad);
        });

        egresos.forEach(element => {
            egresosTotal = egresosTotal + Number(element.cantidad);
        });
        res.json({
            respuesta: true,
            mensaje: 'respuesta exitosa',
            resultado: {
                ingresos,
                egresos,
                ingresosTotal,
                egresosTotal
            } 
        });   
    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'No cuenta con Ingreso - Egresos',
            resultado: null
        })
    }
}

const getTotalDate = async (req, res) => {
    console.log(req.body);
    const {year, id, month} = req.body
    let ingresosTotal = 0;
    let egresosTotal = 0;
    console.log(req.body);
    
    try {
        const [ingresos] = await ingresoModel.selectIngresosMonth(year, id, month);
        const [egresos] = await egresoModel.selectEgresosMonth(year, id, month);
        ingresos.forEach(element => {
            ingresosTotal = ingresosTotal + Number(element.cantidad);
        });

        egresos.forEach(element => {
            egresosTotal = egresosTotal + Number(element.cantidad);
        });
        res.json({
            respuesta: true,
            mensaje: 'respuesta exitosa',
            resultado: {
                ingresos,
                egresos,
                ingresosTotal,
                egresosTotal
            } 
        });   
    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'No cuenta con Ingreso - Egresos',
            resultado: null
        })
    }
}

module.exports = {getTotal, getTotalDate}