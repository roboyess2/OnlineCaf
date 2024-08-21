const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/delete', typeController.delete); 
router.post('/update', typeController.update); 
router.post('/create', typeController.create); 
router.get('/', typeController.getAll); 
router.get('/:id', typeController.getOne); 

module.exports = router;