const Koa = require('koa');
const user = require('./routes/user');

const app = new Koa();

app.use(user.routes()).use(user.allowedMethods());

module.exports = app;
