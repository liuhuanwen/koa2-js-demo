const router = require('koa-router')();
const userController = require('../app/controller/userController');

router.get('/login', userController.login);
router.get('/email', userController.email);

module.exports = router;
