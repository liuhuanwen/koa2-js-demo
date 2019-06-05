const router = require('koa-router')();
const userController = require('../app/controller/userController');

router.post('/user/login', userController.login);
router.get('/user/list', userController.list);
router.post('user/changePwd', userController.changePwd);

module.exports = router;
