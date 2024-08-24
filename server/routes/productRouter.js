const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.post('/delete', productController.delete)
router.post('/update', productController.update)
router.post('/create', productController.create)
router.get('/getall', productController.getAll)
router.get('/id', productController.getOne)

module.exports = router;