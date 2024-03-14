const selectSpecificUser = () => {
    return db.query('SELECT *FROM usuarios WHERE nombre = "Sandy"')
}

const selectFavIngreso = () => {
    return db.query('SELECT * FROM favoritos_ingreso WHERE estado = true ORDER BY nombre')
}
const selectFavEgreso = () => {
    return db.query('SELECT *FROM favoritos_egreso WHERE estado = true ORDER BY nombre')
}

const insertFavIngresos = (categoria) => {
    return db.query('INSERT INTO favoritos_ingreso (nombre) VALUES (?)', [categoria])
}

const insertFavEgresos = (categoria) => {
    return db.query('INSERT INTO favoritos_egreso (nombre) VALUES (?)', [categoria])
}

const activeFavIngresos = (nombre) => {
    return db.query('UPDATE favoritos_ingreso SET estado = TRUE WHERE nombre = ?', [nombre])
}
const activeFavEgresos = (nombre) => {
    return db.query('UPDATE favoritos_egreso SET estado = TRUE WHERE nombre = ?', [nombre])
}

const deleteFavIngresos = (id) => {
    return db.query('UPDATE favoritos_ingreso SET estado = FALSE WHERE id = ?', [id])
}
const deleteFavEgresos = (id) => {
    return db.query('UPDATE favoritos_egreso SET estado = FALSE WHERE id = ?', [id])
}

const deleteDetalleIngreso = (id) => {
    return db.query('DELETE FROM ingresos WHERE id= ?', [id])
}
const deleteDetalleEgreso = (id) => {
    return db.query('DELETE FROM egresos WHERE id= ?', [id])
}

module.exports = {selectSpecificUser,selectFavIngreso,selectFavEgreso,insertFavIngresos,insertFavEgresos, deleteFavIngresos,deleteFavEgresos, deleteDetalleIngreso, deleteDetalleEgreso,activeFavIngresos,activeFavEgresos }