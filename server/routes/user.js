const router = require("express").Router();
const { cekToken } = require('../middlewares/auth')
const { UserController } = require("../controllers/user")

router.post('/kelas/:kelasId', cekToken, UserController.userAddKelas)
router.get('/kelas/:kelasId/materi', cekToken, UserController.userGetMateri)

module.exports=router