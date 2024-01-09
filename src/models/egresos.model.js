const selectAllEgresos = () => {
    return db.query('select * from egresos')
}


const selectEgresosYear = (year, id) => {
    return db.query('SELECT egresos.*, categorias_egreso.nombre AS nombre_egresos, Usuarios.nombre AS nombre_usuario FROM egresos JOIN categorias_egreso ON egresos.categoria_id = categorias_egreso.id JOIN Usuarios ON egresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ?', [year,id])
}

const selectEgresosMonth = (year, id, month) => {
    return db.query('SELECT egresos.*, categorias_egreso.nombre AS nombre_egresos, Usuarios.nombre AS nombre_usuario FROM egresos JOIN categorias_egreso ON egresos.categoria_id = categorias_egreso.id JOIN Usuarios ON egresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ? AND MONTH(fecha) = ?', [year,id, month])
}


module.exports = {selectAllEgresos, selectEgresosYear,selectEgresosMonth}