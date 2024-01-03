const ingresosModel = require('../models/ingresos.model')

const getAllIngresos = async(req, res) => {
    try {
        const [result] = await ingresosModel.selectAllIngresos();
        console.log(result);
        res.json(result);   
    } catch (error) {
        res.json(error)
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

module.exports = {getAllIngresos,createIngresos,editIngresos, deleteIngresos}