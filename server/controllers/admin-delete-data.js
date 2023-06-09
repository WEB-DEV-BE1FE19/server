const { Kelas, Materi, Peserta, Berita, Karya } = require("../models");
class AdminDeleteController {
	static async peserta(req, res) {
		try {
			await Peserta.destroy({where : {id : req.params.pesertaId}});
			res.status(200).send({ msg: "Delete Peserta Berhasil" });
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async kelas(req, res) {
		try {
			const dataKelas = await Kelas.destroy({where : {id : req.params.kelasId}});
			await Materi.destroy({where : {kelas_id : dataKelas.id}});
			res.status(200).send({ msg: "Delete Kelas Berhasil" });
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async karya(req, res) {
		try {
			await Karya.destroy({where : {id : req.params.karyaId}});
			res.status(200).send({ msg: "Delete Karya Berhasil" });
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async berita(req, res) {
		try {
			await Berita.destroy({where : {id : req.params.beritaId}});
			res.status(200).send({ msg: "Delete Berita Berhasil" });
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async materi(req, res) {
		try {
			await Materi.destroy({where : {id : req.params.materiId}});
			res.status(200).send({ msg: "Delete Materi Berhasil" });
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async deleteallpeserta(req, res) {
		try {
			await Peserta.destroy({
				where: {}
			  });
			res.status(200).send({ msg: "Delete Peserta Berhasil" });
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

}

module.exports = AdminDeleteController;
