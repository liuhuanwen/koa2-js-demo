const mysql = require('mysql');
const cmdbPoolConfig = require('../config/dbPool');

function executeSql(pool, sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(`sql: ${sql}`);
      connection.query(sql, (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        console.log(`results: ${JSON.stringify(results)}`);
        resolve(results);
        connection.release();
      })
    })
  });
}

exports.executeCmdbSql = function (sql) {
  const pool = mysql.createPool(cmdbPoolConfig.cmdb);
  return executeSql(pool, sql);
};

exports.executeWorkOrderSql = function (sql) {
  const pool = mysql.createPool(cmdbPoolConfig.workOrder);
  return executeSql(pool, sql);
};

exports.executeMessageSql = function (sql) {
  const pool = mysql.createPool(cmdbPoolConfig.message);
  return executeSql(pool, sql);
};

exports.executePassportSql = function (sql) {
  const pool = mysql.createPool(cmdbPoolConfig.passport);
  return executeSql(pool, sql);
};

exports.executeUserCenterSql = function (sql) {
  const pool = mysql.createPool(cmdbPoolConfig.userCenter);
  return executeSql(pool, sql);
};
