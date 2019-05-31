const Sequelize = require('sequelize');
const userCenterSequelize = require('../../utils/sequelize').userCenterSequelize;
const util = require('../../utils/util');

/**
 * 登录日志
 */
class LoginLog extends Sequelize.Model {
}

module.exports = LoginLog;

LoginLog.init({
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  accountId: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  accountName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  loginType: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'PC'
  },
  loginIp: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  loginTime: {
    type: Sequelize.DATE,
    allowNull: false,
    get() {
      return util.formatSequelizeDate(this.getDataValue('loginTime'));
    }
  },
  isSuccess: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  result: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  createTime: {
    type: Sequelize.DATE,
    allowNull: false,
    get() {
      return util.formatSequelizeDate(this.getDataValue('createTime'));
    }
  }

}, {
  sequelize: userCenterSequelize,
  tableName: 'login_log',
  timestamps: false
});
