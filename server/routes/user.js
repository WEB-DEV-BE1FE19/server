const router = require("express").Router();
const { UserController } = require("../controllers/user")
const { cekToken } = require('../middlewares/auth')

router.post('/kelas/:kelasId', cekToken, UserController.userAddKelas)
router.post('/karya', cekToken, UserController.userAddKarya)

module.exports=router