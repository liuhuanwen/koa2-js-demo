const userService = require('../service/userService');
const dayjs = require('dayjs');

exports.login = async function (ctx) {
  try {
    const loginTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const params = ctx.request.body;
    if (!params.username) throw new Error('用户名不能为空');
    if (!params.password) throw new Error('密码不能为空');
    await userService.login(ctx, loginTime);
    ctx.body = {
      code: 0,
      data: {}
    };
  } catch (e) {
    ctx.body = {
      code: -1,
      message: e.message
    };
  }
};

exports.userList = async function (ctx) {
  const userList = await userService.getUserList();
  ctx.body = {
    code: 0,
    data: {
      userList
    }
  };
};