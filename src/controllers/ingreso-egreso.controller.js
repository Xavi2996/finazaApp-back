const ingresoModel = require('../models/ingresos.model');
const egresoModel = require('../models/egresos.model');

const getTotal = async (req, res) => {
    let ingresosTotal = 0;
    let egresosTotal = 0;
    try {
        const [ingresos] = await ingresoModel.selectAllIngresos();
        const [egresos] = await egresoModel.selectAllEgresos();
        console.log(ingresos);
        
        ingresos.forEach(element => {
            ingresosTotal = ingresosTotal + Number(element.cantidad);
        });

        egresos.forEach(element => {
            egresosTotal = egresosTotal + Number(element.cantidad);
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
    const {year, id, month} = req.body
    let ingresosTotal = 0;
    let egresosTotal = 0;
    let ingresosTotalYear = 0;
    let egresosTotalYear = 0;
    console.log(req.body);
    
    try {
        const [ingresos] = await ingresoModel.selectIngresosMonth(year, id, month);
        const [egresos] = await egresoModel.selectEgresosMonth(year, id, month);
        const [ingresosYear] = await ingresoModel.selectIngresosYear(year, id);
        const [egresosYear] = await egresoModel.selectEgresosYear(year, id);

        ingresos.forEach(element => {
            ingresosTotal = ingresosTotal + Number(element.cantidad);
        });

        egresos.forEach(element => {
            egresosTotal = egresosTotal + Number(element.cantidad);
        });
    
        ingresosYear.forEach(element => {
            ingresosTotalYear = ingresosTotalYear + Number(element.cantidad);
        });

        egresosYear.forEach(element => {
            egresosTotalYear = egresosTotalYear + Number(element.cantidad);
        });

        if (month == 0) {
            res.json({
                respuesta: true,
                mensaje: 'respuesta exitosa',
                resultado: {
                    ingresos: ingresosYear,
                    egresos: egresosYear,
                    ingresosTotal : ingresosTotalYear,
                    egresosTotal : egresosTotalYear
                }
            });  
        } else {
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
        }

    } catch (error) {
        res.json({
            respuesta: false,
            mensaje: 'No cuenta con Ingreso - Egresos',
            resultado: null
        })
    }
}

module.exports = {getTotal, getTotalDate}