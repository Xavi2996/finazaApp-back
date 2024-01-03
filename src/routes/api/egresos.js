const router = require('express').Router();

const egresosController = require('../../controllers/egresos.controller');

router.get('/', egresosController.getAllEgresos);
router.post('/', egresosController.createEgresos);
router.put('/:egresosId', egresosController.editEgresos);
router.delete('/:egresosId', egresosController.deleteEgresos);

module.exports = router;