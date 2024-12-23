require('dotenv').config()

const config = {
    PORT : process.env.PORT | 3000,
    DB: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || 'password'
      } 
} 

module.exports = config;
