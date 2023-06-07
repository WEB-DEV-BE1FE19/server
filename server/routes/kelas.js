const router = require("express").Router();
const { KelasController } = require("../controllers/kelas");

router.get("/kelas", KelasController.allClass);

module.exports = router;
