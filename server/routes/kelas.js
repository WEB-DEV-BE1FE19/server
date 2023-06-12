const router = require("express").Router();
const { KelasController } = require("../controllers/kelas");
const { UserController } = require("../controllers/user")
const { cekToken } = require('../middlewares/auth')

router.get("/kelas", KelasController.allClass);
router.post('/kelas/:kelasId', cekToken, UserController.userAddKelas)

module.exports = router;
