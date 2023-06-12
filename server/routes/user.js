const router = require("express").Router();
const { UserController } = require("../controllers/user")
const { cekToken } = require('../middlewares/auth')

router.post('/login', UserController.userLogin)
router.post('/register', UserController.userRegister)
router.post('/kelas/:kelasId', cekToken, UserController.userAddKelas)

module.exports=router