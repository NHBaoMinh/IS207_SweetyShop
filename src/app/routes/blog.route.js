const express = require('express');
const { blogController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', checkUserLogged, blogController.index);
router.get('/:detailBlog', checkUserLogged, blogController.detailBlog);

module.exports = router;
