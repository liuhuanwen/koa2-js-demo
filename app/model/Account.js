const Sequelize = require('sequelize');
const userCenterSequelize = require('../../utils/sequelize').userCenterSequelize;
const DataTypes = Sequelize.DataTypes;
const util = require('../../utils/util');

class Account extends Sequelize.Model {}

module.exports = Account;

Account.init({
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  loginName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  domainName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  securityKey: {
    type: DataTypes.STRING,
    allowNull: false
  },
  disabled: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  lastLoginIp: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  lastLoginTime: {
    type: DataTypes.DATE,
    allowNull: true,
    get() {
      return util.formatSequelizeDate(this.getDataValue('lastLoginTime'));
    }
  },
  lastUpdatePasswordTime: {
    type: DataTypes.DATE,
    allowNull: true,
    get() {
      return util.formatSequelizeDate(this.getDataValue('lastUpdatePasswordTime'));
    }
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
  tableName: 'account',
  timestamps: false,
});
