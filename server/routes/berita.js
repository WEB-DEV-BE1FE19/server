const router = require("express").Router();
const {BeritaController} = require("../controllers/berita")

router.get("/berita", BeritaController.allNews)
router.get("/berita/:beritaId", BeritaController.newsById)

module.exports = router;
