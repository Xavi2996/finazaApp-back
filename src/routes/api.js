const router = require('express').Router();

router.use('/ingresos', require('./api/ingresos'));
router.use('/egresos', require('./api/egresos'));

module.exports = router;