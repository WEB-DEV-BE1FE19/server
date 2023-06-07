const router = require("express").Router();
const adminGet = require("../controllers/admin-get-data");
const adminPost = require("../controllers/admin-post-data");

router.post("/login-admin", adminGet.adminLogin);

router.get("/admin-dashboard/peserta", adminGet.peserta);
router.get("/admin-dashboard/kelas", adminGet.kelas);
router.get("/admin-dashboard/karya-siswa", adminGet.karyaSiswa);
router.get("/admin-dashboard/berita", adminGet.berita);

router.post("/admin-dashboard/add-peserta", adminPost.peserta)

module.exports = router;
