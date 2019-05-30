const sha256 = require('sha256');
const executeUserCenterSql = require('../../utils/mysql').executeUserCenterSql;
const utils = require('../../utils/util');
const dayjs = require('dayjs');

exports.login = async function (ctx, loginTime) {
  const encryptPassword = sha256(ctx.request.body.password);
  const results =  await executeUserCenterSql(`select * from account where loginName='${ctx.request.body.username}' and password='${encryptPassword}'`);
  if (results.length <= 0) throw new Error('账号/密码不存在');
  const clientIp = utils.getClientIP(ctx.req);
  await insertLoginLog(clientIp, results[0].id, results[0].loginName, loginTime);
};

async function insertLoginLog (clientIp, accountId, accountName, loginTime) {
  const createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  await executeUserCenterSql(`insert into login_log(accountId, accountName, loginIp, loginTime, createTime) values('${accountId}', '${accountName}', '${clientIp}', '${loginTime}', '${createTime}')`);
}
