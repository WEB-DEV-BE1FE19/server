const router = require("express").Router();
const adminGet = require("../controllers/admin-get-data");
const adminPost = require("../controllers/admin-post-data");
const adminDelete = require("../controllers/admin-delete-data");

router.post("/login-admin", adminGet.adminLogin);

router.get("/admin-dashboard/peserta", adminGet.peserta);
router.get("/admin-dashboard/kelas", adminGet.kelas);
router.get("/admin-dashboard/karya-siswa", adminGet.karyaSiswa);
router.get("/admin-dashboard/berita", adminGet.berita);

router.post("/admin-dashboard/add-peserta", adminPost.peserta)
router.post("/admin-dashboard/add-kelas", adminPost.kelas)
router.post("/admin-dashboard/add-karya", adminPost.karya)
router.post("/admin-dashboard/add-berita", adminPost.berita)

router.delete("/admin-dashboard/peserta/:pesertaId", adminDelete.peserta)
router.delete("/admin-dashboard/kelas/:kelasId", adminDelete.kelas)
router.delete("/admin-dashboard/karya/:karyaId", adminDelete.karya)
router.delete("/admin-dashboard/berita/:beritaId", adminDelete.berita)

module.exports = router;
