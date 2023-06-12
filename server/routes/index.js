const router = require('express').Router()
const homepage = require('./homepage')
const adminRouter = require('./admin')
const userRouter = require('./user')
const kelasRouter = require('./kelas')
const beritaRouter = require('./berita')
const karyaRouter = require('./karya')

router.use(homepage)
router.use(kelasRouter)
router.use(karyaRouter) 
router.use(beritaRouter) 

router.use(adminRouter)
router.use(userRouter)

module.exports=router