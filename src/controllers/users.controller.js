const usersModel = require('../models/users.model')

const getSpecificUser = async(req, res) => {
    try {
        const [result] = await usersModel.selectSpecificUser();
        console.log(result);
        res.json(result);   
    } catch (error) {
        res.json(error)
    }
}

module.exports = {getSpecificUser}