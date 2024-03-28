const router = require('express').Router();

const ingresoEgresosController = require('../../controllers/ingreso-egreso.controller');

router.get('/', ingresoEgresosController.getTotal);
router.post('/gastosTotalMonth', ingresoEgresosController.getGatosTotalMonth);
router.post('/valoresDate', ingresoEgresosController.getTotalDate);
// router.post('/', ingresoEgresosController.createEgresos);
// router.put('/:egresosId', ingresoEgresosController.editEgresos);
// router.delete('/:egresosId', ingresoEgresosController.deleteEgresos);

module.exports = router;