const router = require('express').Router();

router.use('/ingresos', require('./api/ingresos'));
router.use('/egresos', require('./api/egresos'));
router.use('/ingreso-egreso', require('./api/ingresos-egresos'));
router.use('/users', require('./api/users'));

module.exports = router;