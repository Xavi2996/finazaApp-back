const router = require('express').Router();

const egresosController = require('../../controllers/egresos.controller');

router.get('/', egresosController.getAllEgresos);
router.get('/egresosYear', egresosController.getEgresosYear);
router.get('/egresosMonth', egresosController.getEgresosMonth);
router.post('/', egresosController.createEgresos);
router.put('/:egresosId', egresosController.editEgresos);
router.delete('/:egresosId', egresosController.deleteEgresos);

module.exports = router;