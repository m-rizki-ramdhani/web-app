const express = require('express')
const config = require('./config/core_config');
const {healthCheckDTORes} = require('./dto/test_dto')
const { sequelize } = require("./database/db_config");

const app = express()
app.use(express.json())

sequelize
  .authenticate()
  .then(() => {
    console.log("Koneksi ke database berhasil!")
  })
  .catch((error) => {
    console.error("Koneksi ke database gagal:", error)
  })

const port = config.PORT

app.get('/api/health-check', (req, res) => {
    const healtCheckRes = new healthCheckDTORes('OK', 'Application running')
    res.status(200).json(healtCheckRes)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${config.port}`)
})