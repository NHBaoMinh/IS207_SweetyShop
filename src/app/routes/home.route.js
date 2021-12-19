const express = require('express');
const { homeController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', checkUserLogged, homeController.index);

module.exports = router;
