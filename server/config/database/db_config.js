const Sequelize = require('sequelize')
const config = require('../core_config')

const sequelize = new Sequelize(config.DB)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


module.exports = db