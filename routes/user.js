const router = require('koa-router')();
const userController = require('../app/controller/userController');

router.post('/login', userController.login);

module.exports = router;
