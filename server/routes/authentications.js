const router = require("express").Router();
const { UserController } = require("../controllers/user")
const upload = require("../helpers/multer")

router.post('/login', UserController.userLogin)
router.post('/register', upload.fields([{name: "portofolio", maxCount: 1}]), UserController.userRegister)

module.exports=router