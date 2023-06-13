const router = require("express").Router();
const adminGet = require("../controllers/admin-get-data");
const adminPost = require("../controllers/admin-post-data");
const adminDelete = require("../controllers/admin-delete-data");
const { cekAdmin } = require("../middlewares/auth")
const upload = require("../helpers/multer")

router.post("/login-admin", adminGet.adminLogin);

router.use(cekAdmin)

router.get("/admin-dashboard/peserta", adminGet.peserta);
router.get("/admin-dashboard/kelas", adminGet.kelas);
router.get("/admin-dashboard/karya", adminGet.karya);
router.get("/admin-dashboard/berita", adminGet.berita);
router.get("/admin-dashboard/kelas/:kelasId/materi", adminGet.materi);

router.post("/admin-dashboard/add-peserta", upload.fields([{name: "portofolio", maxCount: 1}]), adminPost.peserta)
router.post("/admin-dashboard/add-kelas", upload.fields([{name: "gambar_kelas", maxCount: 1}]), adminPost.kelas)
router.post("/admin-dashboard/add-karya", upload.fields([{name: "gambar_karya", maxCount: 1}]), adminPost.karya)
router.post("/admin-dashboard/add-berita", upload.fields([{name: "gambar_berita", maxCount: 1}]), adminPost.berita)
router.post("/admin-dashboard/kelas/:kelasId/add-materi", adminPost.materi)

router.delete("/admin-dashboard/peserta/:pesertaId", adminDelete.peserta)
router.delete("/admin-dashboard/kelas/:kelasId", adminDelete.kelas)
router.delete("/admin-dashboard/karya/:karyaId", adminDelete.karya)
router.delete("/admin-dashboard/berita/:beritaId", adminDelete.berita)
router.delete("/admin-dashboard/materi/:materiId", adminDelete.materi)
router.delete("/admin-dashboard/deleteall", adminDelete.deleteallpeserta)

module.exports = router;
