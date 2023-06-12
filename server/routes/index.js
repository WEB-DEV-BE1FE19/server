const router = require('express').Router()
const adminRouter = require('./admin')
const userRouter = require('./user')
const authenticationRouter = require('./authentications')
const beforeLoginRouter = require('./beforeLogin')
const afterLoginRouter = require('./afterLogin')

router.use(beforeLoginRouter)
router.use(afterLoginRouter)
router.use(authenticationRouter)
router.use(userRouter)
router.use(adminRouter)

module.exports=router