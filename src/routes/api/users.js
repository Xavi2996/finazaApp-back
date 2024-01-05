const router = require('express').Router();

const usersController = require('../../controllers/users.controller');

router.get('/', usersController.getSpecificUser);


module.exports = router;