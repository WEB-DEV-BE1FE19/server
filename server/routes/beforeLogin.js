const router = require("express").Router()

const homePage = require("../controllers/beforeLogin")
router.get("/", homePage.generateHomePage)

const { KelasController } = require("../controllers/kelas")
router.get("/kelas", KelasController.allClass)
router.get("/kelas/:kelasId", KelasController.kelasById)

const { KaryaController } = require("../controllers/karya")
router.get("/karya", KaryaController.allArt)
router.get("/karya/:karyaId", KaryaController.artById)

const { BeritaController } = require("../controllers/berita")
router.get("/berita", BeritaController.allNews)
router.get("/berita/:beritaId", BeritaController.newsById)

module.exports = router;
