const Sequelize = require('sequelize');
const userCenterSequelize = require('../../utils/sequelize').userCenterSequelize;
const util = require('../../utils/util');

class Account extends Sequelize.Model {}

module.exports = Account;

Account.init({
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  loginName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  domainName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  securityKey: {
    type: Sequelize.STRING,
    allowNull: false
  },
  disabled: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  lastLoginIp: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  lastLoginTime: {
    type: Sequelize.DATE,
    allowNull: true,
    get() {
      return util.formatSequelizeDate(this.getDataValue('lastLoginTime'));
    }
  },
  lastUpdatePasswordTime: {
    type: Sequelize.DATE,
    allowNull: true,
    get() {
      return util.formatSequelizeDate(this.getDataValue('lastUpdatePasswordTime'));
    }
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
  tableName: 'account',
  timestamps: false,
});
