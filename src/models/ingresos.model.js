const selectAllIngresos = () => {
    return db.query('select * from ingresos')
}

const selectIngresosYear = (year, id) => {
    return db.query('SELECT Ingresos.*, Categorias_Ingreso.nombre AS nombre_ingreso, Usuarios.nombre AS nombre_usuario FROM Ingresos JOIN Categorias_Ingreso ON Ingresos.categoria_id = Categorias_Ingreso.id JOIN Usuarios ON Ingresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ?', [year,id])
}

const selectIngresosMonth = (year, id, month) => {
    return db.query('SELECT Ingresos.*, Categorias_Ingreso.nombre AS nombre_ingreso, Usuarios.nombre AS nombre_usuario FROM Ingresos JOIN Categorias_Ingreso ON Ingresos.categoria_id = Categorias_Ingreso.id JOIN Usuarios ON Ingresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ? AND MONTH(fecha) = ?', [year,id, month])
}

module.exports = {selectAllIngresos, selectIngresosYear, selectIngresosMonth}