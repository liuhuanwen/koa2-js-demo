const Koa = require('koa');
const user = require('./routes/user');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method}====>${ctx.request.href}`);
  await next();
  console.log(`${ctx.request.href}<====${JSON.stringify(ctx.response.body)}`);
});
app.use(user.routes()).use(user.allowedMethods());

module.exports = app;