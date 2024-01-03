const selectAllIngresos = () => {
    return db.query('select * from ingresos')
}


module.exports = {selectAllIngresos}