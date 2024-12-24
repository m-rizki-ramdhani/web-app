require('dotenv').config()

const config = {
    PORT  : process.env.PORT | 3000,
    DEVELOPMENT: {
        USERNAME: process.env.DB_USER || "root",          
        PASSWORD: process.env.DB_PASS || "",            
        DATABASE: process.env.DB_NAME || "my_database",  
        HOST    : process.env.DB_HOST || "localhost",        
        DIALECT : process.env.DB_DIALECT || "mysql",        
    }
} 

module.exports = config;
