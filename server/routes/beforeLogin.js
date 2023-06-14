const router = require("express").Router();
const homePage = require("../controllers/beforeLogin");
const { KelasController } = require("../controllers/kelas");
const { KaryaController } = require("../controllers/karya");
const { BeritaController } = require("../controllers/berita");

router.get("/", homePage.generateHomePage);
router.get("/kelas", KelasController.allClass);
router.get("/kelas/:kelasId", KelasController.kelasById);
router.get("/karya", KaryaController.allArt);
router.get("/karya/:karyaId", KaryaController.artById);
router.get("/berita", BeritaController.allNews);
router.get("/berita/:beritaId", BeritaController.newsById);

module.exports = router;
