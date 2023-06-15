const router = require("express").Router();
const adminGet = require("../controllers/admin-get-data");
const adminPost = require("../controllers/admin-post-data");
const adminDelete = require("../controllers/admin-delete-data");
const adminUpdate = require("../controllers/admin-update-data");
const { cekAdmin } = require("../middlewares/auth")
const upload = require("../helpers/multer")

router.post("/login-admin", adminGet.adminLogin);

router.use(cekAdmin)

router.get("/admin-dashboard/peserta", adminGet.peserta);
router.get("/admin-dashboard/kelas", adminGet.kelas);
router.get("/admin-dashboard/karya", adminGet.karya);
router.get("/admin-dashboard/berita", adminGet.berita);
router.get("/admin-dashboard/kelas/:kelasId/materi", adminGet.materi);
router.get("/admin-dashboard/materiAll", adminGet.materiAll);

router.post("/admin-dashboard/peserta", adminPost.peserta)
router.post("/admin-dashboard/kelas", upload.fields([{name: "gambar_kelas", maxCount: 1}]), adminPost.kelas)
router.post("/admin-dashboard/karya", upload.fields([{name: "gambar_karya", maxCount: 1}]), adminPost.karya)
router.post("/admin-dashboard/berita", upload.fields([{name: "gambar_berita", maxCount: 1}]), adminPost.berita)
router.post("/admin-dashboard/kelas/:kelasId/materi", upload.fields([{name: "video_materi", maxCount: 1}]), adminPost.materi)

router.delete("/admin-dashboard/peserta/:pesertaId", adminDelete.peserta)
router.delete("/admin-dashboard/kelas/:kelasId", adminDelete.kelas)
router.delete("/admin-dashboard/karya/:karyaId", adminDelete.karya)
router.delete("/admin-dashboard/berita/:beritaId", adminDelete.berita)
router.delete("/admin-dashboard/materi/:materiId", adminDelete.materi)
router.delete("/admin-dashboard/deleteAll", adminDelete.deleteallpeserta)

router.put("/admin-dashboard/peserta/:pesertaId", adminUpdate.peserta)
router.put("/admin-dashboard/kelas/:kelasId", upload.fields([{name: "gambar_kelas", maxCount: 1}]), adminUpdate.kelas)
router.put("/admin-dashboard/karya/:karyaId", upload.fields([{name: "gambar_karya", maxCount: 1}]), adminUpdate.karya)
router.put("/admin-dashboard/berita/:beritaId", upload.fields([{name: "gambar_berita", maxCount: 1}]), adminUpdate.berita)
router.put("/admin-dashboard/kelas/:kelasId/:materiId", upload.fields([{name: "video_materi", maxCount: 1}]), adminUpdate.materi)

module.exports = router;
