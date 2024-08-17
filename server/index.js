require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
}

start()