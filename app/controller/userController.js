const userService = require('../service/userService');
const dayjs = require('dayjs');

/**
 * 登录接口
 */
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

/**
 * 用户列表
 */
exports.userList = async function (ctx) {
  const userList = await userService.getUserList();
  ctx.body = {
    code: 0,
    data: {
      userList
    }
  };
};

/**
 * 修改密码
 */
exports.changePwd = async function (ctx) {
  try {
    const params = ctx.request.body;
    if (!params.username) throw new Error('用户名不能为空');
    if (!params.oldPassword) throw new Error('旧密码不能为空');
    if (!params.newPassword) throw new Error('新密码不能为空');
    if (!params.confirmPassword || params.newPassword !== params.confirmPassword) throw new Error('两次新密码输入不一致');
    await userService.changePassword(ctx);
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
}