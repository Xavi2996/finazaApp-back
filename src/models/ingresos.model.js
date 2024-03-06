const selectAllIngresos = () => {
    return db.query('select * from ingresos')
}

const selectIngresosYear = (year, id) => {
    return db.query('SELECT Ingresos.*, Categorias_Ingreso.nombre AS nombre_ingreso, Usuarios.nombre AS nombre_usuario FROM Ingresos JOIN Categorias_Ingreso ON Ingresos.categoria_id = Categorias_Ingreso.id JOIN Usuarios ON Ingresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ?', [year,id])
}

const selectIngresosMonth = (year, id, month) => {
    return db.query('SELECT Ingresos.*, Categorias_Ingreso.nombre AS nombre_ingreso, Usuarios.nombre AS nombre_usuario FROM Ingresos JOIN Categorias_Ingreso ON Ingresos.categoria_id = Categorias_Ingreso.id JOIN Usuarios ON Ingresos.usuario_id = Usuarios.id WHERE YEAR(fecha) = ? AND usuario_id = ? AND MONTH(fecha) = ?', [year,id, month])
}

const createIngresos = (cantidad, fecha, categoria, usuario) => {
    return db.query('INSERT INTO Ingresos (cantidad, fecha, categoria_id, usuario_id) VALUES (?,?,?,?)', [cantidad,fecha,categoria,usuario])
}
const findIngresos = (categoria) => {
    return db.query('SELECT * FROM categorias_ingreso WHERE nombre LIKE ?', [`%${categoria}%`]);
}

const insertIngresos = (categoria) => {
    return db.query('INSERT INTO categorias_ingreso (nombre) VALUES (?)', [categoria])
}

module.exports = {selectAllIngresos, selectIngresosYear, selectIngresosMonth,createIngresos, findIngresos,insertIngresos}