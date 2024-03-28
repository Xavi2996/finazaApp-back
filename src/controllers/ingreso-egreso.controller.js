const ingresoModel = require('../models/ingresos.model');
const egresoModel = require('../models/egresos.model');
const ingresoEgresoModel = require('../models/ingresos-egresos.model');

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

const getGatosTotalMonth = async (req, res) => {
    const { year } = req.body;
    let gastos = {};
    try {
        const [resultIngresos] = await ingresoEgresoModel.getIngresosTotalMonth(year);
        const [resultEgresos] = await ingresoEgresoModel.getEgresosTotalMonth(year);
        
        
        if (resultIngresos.length == 0 && resultEgresos.length == 0) {
            res.json({
                respuesta: false,
                mensaje: 'No se encuentra información en esta fecha',
                resultado: 'No data'
            })
        } else {           
            gastos = {
                ingresos: resultIngresos,
                egresos: resultEgresos
            }
            res.json({
            respuesta: true,
            mensaje: 'Datos encontrados',
            resultado: gastos
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

module.exports = {getTotal, getTotalDate, getGatosTotalMonth}