const router = require('koa-router')();
const userController = require('../app/controller/userController');

router.post('/login', userController.login);
router.get('/userList', userController.userList);
router.post('/changePwd', userController.changePwd);

module.exports = router;