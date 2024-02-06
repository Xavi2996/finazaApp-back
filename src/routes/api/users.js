const router = require('express').Router();

const usersController = require('../../controllers/users.controller');

router.get('/', usersController.getSpecificUser);
router.get('/categoria-ingreso', usersController.getCatIngreso);
router.get('/categoria-egreso', usersController.getCatEgreso);
router.post('/insertCatIngreso', usersController.postCatIngreso);
router.post('/insertCatEgreso', usersController.postCatEgreso);
router.get('/deleteCatIngreso/:id', usersController.deleteCatIngreso);
router.get('/deleteCatEgreso/:id', usersController.deleteCatEgreso);


module.exports = router;