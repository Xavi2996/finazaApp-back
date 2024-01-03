const router = require('express').Router();

const ingresosController = require('../../controllers/ingresos.controller');

router.get('/', ingresosController.getAllIngresos);
router.post('/', ingresosController.createIngresos);
router.put('/:ingresoId', ingresosController.editIngresos);
router.delete('/:ingresoId', ingresosController.deleteIngresos);

module.exports = router;