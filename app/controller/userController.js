exports.login = async function (ctx, next) {
  try {
    let result = await executeUserCenterSql('select * from city');
    ctx.body = {code: 0, data: result};
  } catch (e) {
    ctx.body = {code: -1, message: e.message};
  }
  await next();
};

exports.email = async function (ctx, next) {
  try {
    let result = await executeSql('select * from email a join usercenter.employee b on a.address = b.email');
    ctx.body = {code: 0, data: result};
  } catch (e) {
    ctx.body = {code: -1, message: e.message};
  }
  await next();
};
