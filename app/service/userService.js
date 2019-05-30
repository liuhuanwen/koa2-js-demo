const sha256 = require('sha256');
const executeUserCenterSql = require('../../utils/mysql').executeUserCenterSql;

exports.login = async function (username, password) {
  const encryptPassword = sha256(password);
  const result =  await executeUserCenterSql(`select count(*) from account where loginName='${username}' and password='${encryptPassword}'`);
  if (result < 0) throw new Error('账号/密码不存在');
};
