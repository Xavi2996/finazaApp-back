const selectAllEgresos = () => {
    return db.query('select * from egresos')
}


module.exports = {selectAllEgresos}