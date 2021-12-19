const express = require('express');
const { aboutUsController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', checkUserLogged, aboutUsController.index);

module.exports = router;
