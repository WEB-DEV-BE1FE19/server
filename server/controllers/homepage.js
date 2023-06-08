const { Peserta, Kelas, Berita, Karya } = require("../models");

class GenerateHomePage {
	static async genertaeHomePage(req, res) {
		try {
			const kelas = await Kelas.findAll();
            const karyaSiswa = await Karya.findAll();
			const berita = await Berita.findAll();
            const response = {
                kelas: kelas,
                karyaSiswa: karyaSiswa,
                berita: berita
            }
			res.status(200).json(response);
		} catch (error) {
            console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}
}

module.exports = GenerateHomePage;
