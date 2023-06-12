const router = require("express").Router();
const afterLogin = require("../controllers/afterLogin");
const homePage = require("../controllers/beforeLogin");
const { cekToken } = require('../middlewares/auth')

router.get("/home", cekToken, afterLogin.generateInfoPeserta, homePage.generateHomePage);

module.exports = router;
