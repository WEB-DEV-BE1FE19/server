const router = require('express').Router()
const homepage = require('./homepage')
const adminRouter = require('./admin')
const userRouter = require('./user')
const kelasRouter = require('./kelas')

router.use(adminRouter)
router.use(userRouter)
router.use(homepage)
router.use(kelasRouter)

module.exports=router