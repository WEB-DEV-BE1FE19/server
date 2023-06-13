const router = require("express").Router();
const { cekToken } = require('../middlewares/auth')
const afterLogin = require("../controllers/afterLogin");
const homePage = require("../controllers/beforeLogin");
const dashboard = require("../controllers/dashboardPeserta")

router.get("/home", cekToken, afterLogin.generateInfoPeserta, homePage.generateHomePage);
router.get("/dashboard", cekToken, dashboard.kelas)

module.exports = router;
