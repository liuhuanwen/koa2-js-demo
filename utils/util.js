const dayjs = require('dayjs');

exports.getClientIP = function (req) {
  let clientIp = req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress;
  if (clientIp.indexOf('::ffff:') !== -1) {
    clientIp = clientIp.substring(7);
  }
  return clientIp;
};

exports.formatSequelizeDate = function (date) {
  if (date) {
    const temp = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    if (temp === 'Invalid Date') {
      return '';
    } else {
      return temp;
    }
  } else {
    return '';
  }
};