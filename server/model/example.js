const {Sequelize, sequelize} = require("../database/db_config")

const ExampleTable = sequelize.define("ExampleTable", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

ExampleTable.sync({ force : false })
    .then(() => {
        console.log('Table Example berhasil dibuat')
    })
    .catch(() => {
        console.error("Error saat sinkronisasi tabel example:", error)
    })

module.exports = ExampleTable