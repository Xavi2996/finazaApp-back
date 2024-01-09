const ingresoModel = require('../models/ingresos.model');
const egresoModel = require('../models/egresos.model');

const getTotal = async (req, res) => {
    let ingresosTotal;
    let egresosTotal;
    try {
        const [ingresos] = await ingresoModel.selectAllIngresos();
        const [egresos] = await egresoModel.selectAllEgresos();
        console.log(ingresos);
        console.log(egresos);
        ingresos.forEach(element => {
            ingresosTotal = + element.cantidad;
        });

        egresos.forEach(element => {
            egresosTotal = + element.cantidad;
        });

        console.log(ingresosTotal);
        console.log(egresosTotal);
        
        // res.json(result);   
    } catch (error) {
        res.json(error)
    }
}

module.exports = {getTotal}