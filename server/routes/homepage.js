const router = require('express').Router()
const homePage = require('../controllers/homepage')

router.get('/', homePage.genertaeHomePage)

module.exports=router