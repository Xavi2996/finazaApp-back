const selectAllEgresos = () => {
    return db.query('select * from egresos')
}


const selectEgresosYear = (year, id) => {
    return db.query('SELECT egresos.*, categorias_egreso.nombre AS nombre_egresos, Usuarios.nombre AS nombre_usuario FROM egresos JOIN categorias_egreso ON egresos.categoria_id = categorias_egreso.id JOIN Usuarios ON egresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ?', [year,id])
}

const selectEgresosMonth = (year, id, month) => {
    return db.query('SELECT egresos.*, categorias_egreso.nombre AS nombre_egresos, Usuarios.nombre AS nombre_usuario FROM egresos JOIN categorias_egreso ON egresos.categoria_id = categorias_egreso.id JOIN Usuarios ON egresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ? AND MONTH(fecha) = ?', [year,id, month])
}

const createEgresos = (cantidad, fecha, categoria, usuario) => {
    return db.query('INSERT INTO egresos (cantidad, fecha, categoria_id, usuario_id) VALUES (?,?,?,?)', [cantidad,fecha,categoria,usuario])
}
const findEgresos = (categoria) => {
    return db.query('SELECT * FROM categorias_egreso WHERE nombre LIKE ?', [`%${categoria}%`]);
}

const insertEgresos = (categoria) => {
    return db.query('INSERT INTO categorias_egreso (nombre) VALUES (?)', [categoria])
}


module.exports = {selectAllEgresos, selectEgresosYear,selectEgresosMonth,createEgresos,findEgresos,insertEgresos}