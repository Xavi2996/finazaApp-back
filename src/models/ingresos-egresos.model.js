const getIngresosTotalMonth = (year) => {
    return db.query('SELECT MONTH(fecha) AS mes, SUM(cantidad) AS gasto_total FROM Ingresos WHERE YEAR(fecha) = ? GROUP BY MONTH(fecha) ORDER BY mes ASC', [year])
}
const getEgresosTotalMonth = (year) => {
    return db.query('SELECT MONTH(fecha) AS mes, SUM(cantidad) AS gasto_total FROM Egresos WHERE YEAR(fecha) = ? GROUP BY MONTH(fecha) ORDER BY mes ASC', [year])
}

module.exports = {getIngresosTotalMonth,getEgresosTotalMonth}