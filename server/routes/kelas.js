const router = require("express").Router();
const { KelasController } = require("../controllers/kelas");

router.get("/kelas", KelasController.allClass);
router.get("/kelas/:kelasId", KelasController.kelasById)

module.exports = router;
