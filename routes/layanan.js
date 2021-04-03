const express = require('express');
const router = express.Router();

const layananHandler = require('./handler/layanan')

router.post('/create-layanan', layananHandler.createLayanan)
router.get('/', layananHandler.getLayanan)
router.get('/:id', layananHandler.getLayananId)
router.put('/:id', layananHandler.updateLayanan)
router.delete('/:id', layananHandler.deleteLayanan)

module.exports = router;
