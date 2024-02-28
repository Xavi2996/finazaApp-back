const router = require('express').Router();

const usersController = require('../../controllers/users.controller');

router.get('/', usersController.getSpecificUser);
router.get('/categoria-ingreso', usersController.getFavIngreso);
router.get('/categoria-egreso', usersController.getFavEgreso);
router.post('/insertCatIngreso', usersController.postCatIngreso);
router.post('/insertCatEgreso', usersController.postCatEgreso);
router.post('/insertFavIngreso', usersController.postFavIngreso);
router.post('/insertFavEgreso', usersController.postFavEgreso);
router.get('/deleteFavIngreso/:id', usersController.deleteFavIngreso);
router.get('/deleteFavEgreso/:id', usersController.deleteFavEgreso);


module.exports = router;