const express = require('express');
const { cakeController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/:cakeID', cakeController.getCakeById);
router.get('/', cakeController.getCakes);
router.post('/', cakeController.createCake);
router.put('/:cakeID', cakeController.updateCake);
router.delete('/:cakeID', cakeController.deleteCake);

module.exports = router;
