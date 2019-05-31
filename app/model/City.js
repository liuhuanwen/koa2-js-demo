const Sequelize = require('sequelize');
const cmdbSequelize = require('../../utils/sequelize').cmdbSequelize;
const DataTypes = Sequelize.DataTypes;

class City extends Sequelize.Model {}

module.exports = City;

City.init({
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize: cmdbSequelize,
  tableName: 'city',
  timestamps: false,
});
