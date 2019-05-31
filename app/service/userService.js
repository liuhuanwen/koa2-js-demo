const sha256 = require('sha256');
const utils = require('../../utils/util');
const dayjs = require('dayjs');
const Account = require('../model/Account');
const LoginLog = require('../model/LoginLog');

exports.login = async function (ctx, loginTime) {
  const encryptPassword = sha256(ctx.request.body.password);
  const result = await Account.findOne({
    where: {
      loginName: ctx.request.body.username,
      password: encryptPassword
    }
  });
  if (result === null) throw new Error('账号/密码不存在');
  const clientIp = utils.getClientIP(ctx.req);
  await insertLoginLog(clientIp, result.id, result.loginName, loginTime);
};

async function insertLoginLog(clientIp, accountId, accountName, loginTime) {
  const createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  await LoginLog.build({
    loginIp: clientIp,
    accountId,
    accountName,
    loginTime,
    result: '登录成功',
    createTime
  }).save();
}

exports.changePassword = async function (ctx) {
  const encryptPassword = sha256(ctx.request.body.oldPassword);
  const result = await Account.findOne({
    where: {
      loginName: ctx.request.body.username,
      password: encryptPassword
    }
  });
  if (result === null) throw new Error('账号/密码不存在');
  await Account.update({
    password: sha256(ctx.request.body.newPassword),
    lastUpdatePasswordTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
  }, {
    where: {
      id: result.id
    }
  })
};

exports.getUserList = async function () {
  return await Account.findAll({
    attributes: ['id', 'loginName', 'lastLoginTime', 'lastUpdatePasswordTime']
  });
};
