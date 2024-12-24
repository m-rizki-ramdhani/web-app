// sequelize-cli.js
const path = require("path");

module.exports = {
  config: path.resolve(__dirname, "server", "database", "config.json"),  // File konfigurasi di server/database
  modelsPath: path.resolve(__dirname, "server", "models"),             // Folder model di server/models
  migrationsPath: path.resolve(__dirname, "server", "migrations"),     // Folder migrasi di server/migrations
  seedersPath: path.resolve(__dirname, "server", "seeders"),           // Folder seeders di server/seeders
};
