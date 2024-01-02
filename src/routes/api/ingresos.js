const router = require('express').Router();

const ingresosController = require('../../controllers/ingresos.controller');

router.get('/', ingresosController.getAllIngresos);

module.exports = router;