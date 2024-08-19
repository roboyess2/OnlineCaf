const Router = require('express'); // Импортируем express
const router = new Router(); // Создаем новый экземпляр роутера

const userRouter = require('./userRouter'); // Импортируем роутер пользователей
const productRouter = require('./productRouter'); // Импортируем роутер продуктов
const tableRouter = require('./tableRouter'); // Импортируем роутер таблиц
const typeRouter = require('./typeRouter');

// Настраиваем маршруты
router.use('/user',userRouter)
router.use('/product',productRouter)
router.use('/table',tableRouter)
router.use('/type',typeRouter)

module.exports = router; // Экспортируем роутер
