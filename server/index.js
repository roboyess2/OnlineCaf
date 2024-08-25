require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path') 

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router)


// Обработка middleware
app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate();  // Аутентификация с базой данных
        await sequelize.sync({ alter: true });  // Синхронизация моделей с базой данных
        app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    // Удалите вызов sequelize.close() из блока finally
};

start();