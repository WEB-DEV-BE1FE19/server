const router = require("express").Router();
const {KaryaController} = require("../controllers/karya")

router.get("/karya", KaryaController.allArt)
router.get("/karya/:karyaId", KaryaController.artById)

module.exports = router;
