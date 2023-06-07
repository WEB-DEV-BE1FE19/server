const router = require('express').Router()
const adminRouter = require('./admin')
const kelasRouter = require('./kelas')


router.get('/', (req,res) => {
    res.send('ini homepage')
})

router.use(adminRouter)
router.use(kelasRouter)

module.exports=router