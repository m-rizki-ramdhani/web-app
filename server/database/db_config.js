const Sequelize = require('sequelize')
const dbConfig = require('../config/core_config')[process.env.NODE_ENV] || "DEVELOPMENT"
  

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,{
    host:   dbConfig.HOST,
    dialect:   dbConfig.DIALECT || 'mysql',
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


module.exports = db