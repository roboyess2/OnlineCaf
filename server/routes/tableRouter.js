const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableController')


router.post('/book', tableController.bookTable)
router.get('/check', tableController.checkTable)

module.exports = router;