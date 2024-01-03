const egresosModel = require('../models/egresos.model')

const getAllEgresos = async(req, res) => {
    try {
        const [result] = await egresosModel.selectAllEgresos();
        console.log(result);
        res.json(result);   
    } catch (error) {
        res.json(error)
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

module.exports = {getAllEgresos,createEgresos,editEgresos,deleteEgresos}