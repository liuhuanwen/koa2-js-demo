const Sequelize = require('sequelize');

exports.cmdbSequelize = new Sequelize('idc_cmdb', 'bg_idcuser', 'GK(B8@ks^*JH', {
  host: '10.1.100.107',
  dialect: 'mysql',
  port: 32959,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
});

exports.userCenterSequelize = new Sequelize('usercenter', 'bg_idcuser', 'GK(B8@ks^*JH', {
  host: '10.1.100.107',
  dialect: 'mysql',
  port: 32959,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
});