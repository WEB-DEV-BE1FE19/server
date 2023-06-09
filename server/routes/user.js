const router = require("express").Router();
const { UserController } = require("../controllers/user")

router.post('/login', UserController.userLogin)
router.post('/register', UserController.userRegister)
module.exports=router