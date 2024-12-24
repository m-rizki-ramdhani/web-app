require('dotenv').config()

const config = {
    PORT  : process.env.PORT | 3000,
    DB    : {
      USERNAME  : "root",          
      PASSWORD  : "",              
      DATABASE  : "my_database",   
      HOST      : "localhost",        
      DIALECT   : "mysql",      
    }      
} 

module.exports = config;
