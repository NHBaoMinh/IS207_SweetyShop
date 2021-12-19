const express = require('express');
const { typeCakeController } = require('../controllers');

const router = express.Router();

router.get('/', typeCakeController.getTypeCakes);
router.post('/', typeCakeController.createTypeCake);
router.delete('/:typeCakeID', typeCakeController.deleteTypeCake);
router.put('/:typeCakeID', typeCakeController.updateTypeCake);

module.exports = router;
