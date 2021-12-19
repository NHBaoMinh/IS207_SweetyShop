const express = require('express');
const { adminController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', adminController.index);
router.get('/user/change-password', adminController.changePassword);
router.get('/services/manager-cake', adminController.managerCake);
router.get('/services/manager-Typecake', adminController.managerTypeCake);
router.get('/services/manager-Receipt', adminController.managerReceipt);
router.get('/services/manager-Account', adminController.managerAccount);
router.get('/user/info', checkUserLogged, adminController.info);

module.exports = router;
