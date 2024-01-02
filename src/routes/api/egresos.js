const router = require('express').Router();

const egresosController = require('../../controllers/egresos.controller');

router.get('/', egresosController.getAllegresos);

module.exports = router;