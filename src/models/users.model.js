const selectSpecificUser = () => {
    return db.query('SELECT *FROM usuarios WHERE nombre = "Sandy"')
}

const selectCatIngreso = () => {
    return db.query('SELECT * FROM favoritos_ingreso WHERE estado = true')
}
const selectCatEgreso = () => {
    return db.query('SELECT *FROM favoritos_egreso WHERE estado = true')
}

const insertCatIngresos = (categoria) => {
    return db.query('INSERT INTO favoritos_ingreso (nombre) VALUES (?)', [categoria])
}

const insertCatEgresos = (categoria) => {
    return db.query('INSERT INTO favoritos_egreso (nombre) VALUES (?)', [categoria])
}

const deleteCatIngresos = (id) => {
    return db.query('UPDATE favoritos_ingreso SET estado = FALSE WHERE id = ?', [id])
}
const deleteCatEgresos = (id) => {
    return db.query('UPDATE favoritos_egreso SET estado = FALSE WHERE id = ?', [id])
}

module.exports = {selectSpecificUser,selectCatIngreso,selectCatEgreso,insertCatIngresos,insertCatEgresos, deleteCatIngresos,deleteCatEgresos}