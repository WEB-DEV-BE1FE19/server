const router = require("express").Router();
const { KelasController } = require("../controllers/kelas");
const { UserController } = require("../controllers/user")
const auth = require('../middlewares/auth')

router.get("/kelas", KelasController.allClass);

router.use(auth)
router.post('/kelas/:kelasId', UserController.userAddKelas)

module.exports = router;
