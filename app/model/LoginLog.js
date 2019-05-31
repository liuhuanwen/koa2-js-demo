const Sequelize = require('sequelize');
const userCenterSequelize = require('../../utils/sequelize').userCenterSequelize;
const DataTypes = Sequelize.DataTypes;
const util = require('../../utils/util');

/**
 * 登录日志
 */
class LoginLog extends Sequelize.Model {}

module.exports = LoginLog;

LoginLog.init({
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  accountId: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  accountName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'PC'
  },
  loginIp: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  loginTime: {
    type: DataTypes.DATE,
    allowNull: false,
    get() {
      return util.formatSequelizeDate(this.getDataValue('loginTime'));
    }
  },
  isSuccess: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  createTime: {
    type: DataTypes.DATE,
    allowNull: false,
    get() {
      return util.formatSequelizeDate(this.getDataValue('createTime'));
    }
  }

}, {
  sequelize: userCenterSequelize,
  tableName: 'login_log',
  timestamps: false
})