const userService = require('../service/userService');

exports.login = async function (ctx) {
  try {
    const params = ctx.request.body;
    if (!params.username) throw new Error('用户名不能为空');
    if (!params.password) throw new Error('密码不能为空');
    await userService.login(params.username, params.password);
    ctx.body = {code: 0, data: {}};
  } catch (e) {
    ctx.body = {code: -1, message: e.message};
  }
};
