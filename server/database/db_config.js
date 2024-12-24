const Sequelize = require('sequelize')

const config = {
    development: {
      username: process.env.DB_USER | "root",          // Username MySQL
      password: process.env.DB_PASS | "",              // Password MySQL (kosongkan jika menggunakan XAMPP default)
      database: process.env.DB_NAME | "my_database",   // Nama database yang Anda buat di phpMyAdmin
      host    : process.env.DB_HOST | "localhost",         // Host MySQL
      dialect : process.env.DB_DIALECT | "mysql",          // Jenis database yang digunakan (MySQL)
    }
  };
  

const sequelize = new Sequelize(config.development)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


module.exports = db