const router = require("express").Router();
const { cekToken } = require('../middlewares/auth')
const afterLogin = require("../controllers/afterLogin");
const homePage = require("../controllers/beforeLogin");

router.get("/home", cekToken, afterLogin.generateInfoPeserta, homePage.generateHomePage);

module.exports = router;
