const Sequelize = require('sequelize')

const config = {
    development: {
      username: "root",          // Username MySQL
      password: "",              // Password MySQL (kosongkan jika menggunakan XAMPP default)
      database: "my_database",   // Nama database yang Anda buat di phpMyAdmin
      host: "localhost",         // Host MySQL
      dialect: "mysql",          // Jenis database yang digunakan (MySQL)
    }
  };
  

const sequelize = new Sequelize(config.development)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


module.exports = db