const router = require('express').Router()
const homepage = require('./homepage')
const adminRouter = require('./admin')
const kelasRouter = require('./kelas')


router.use(homepage)
router.use(adminRouter)
router.use(kelasRouter)

module.exports=router