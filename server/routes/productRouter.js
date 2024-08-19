const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.post('/', productController.delete)
router.post('/', productController.update)
router.post('/', productController.create)
router.get('/', productController.getAll)
router.get('/', productController.getOne)

module.exports = router;