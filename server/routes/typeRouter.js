const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')

router.post('/', typeController.delete)
router.post('/', typeController.update)
router.post('/create', typeController.create)
router.get('/', typeController.getAll)
router.get('/', typeController.getOne)

module.exports = router;