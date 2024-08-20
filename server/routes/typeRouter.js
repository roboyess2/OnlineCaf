const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/delete', typeController.delete); // Удаление типа
router.post('/update', typeController.update); // Обновление типа
router.post('/create', typeController.create); // Создание типа
router.get('/', typeController.getAll); // Получение всех типов
router.get('/:id', typeController.getOne); // Получение одного типа по ID

module.exports = router;