const selectSpecificUser = () => {
    return db.query('SELECT *FROM usuarios WHERE nombre = "Sandy"')
}


module.exports = {selectSpecificUser}