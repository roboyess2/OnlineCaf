const Router = require('express')
const router = new Router()
const tableController = require('../controllers/tableController')


router.post('/', tableController.bookTable)
router.get('/', tableController.checkTable)

module.exports = router;