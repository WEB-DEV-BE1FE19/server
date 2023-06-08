const router = require("express").Router();
const userController = require("../controllers/user")
// const auth = require('../middlewares/auth')

router.post('/login', userController.userLogin)
router.post('/register', userController.userRegister)



module.exports=router