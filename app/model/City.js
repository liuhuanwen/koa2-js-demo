const Sequelize = require('sequelize');
const cmdbSequelize = require('../../utils/sequelize').cmdbSequelize;

class City extends Sequelize.Model {}

module.exports = City;

City.init({
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize: cmdbSequelize,
  tableName: 'city',
  timestamps: false,
});
