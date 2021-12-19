const express = require('express');
const { contactController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', checkUserLogged, contactController.index);

module.exports = router;
