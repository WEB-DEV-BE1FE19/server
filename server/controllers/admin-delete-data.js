const { Kelas, Materi, Peserta, Berita, Karya, Kelas_Peserta, Karya_Peserta } = require("../models");
class AdminDeleteController {
	static async peserta(req, res) {
		try {
			await Kelas_Peserta.destroy({where : {id_peserta : req.params.pesertaId}});
			await Karya_Peserta.destroy({where : {peserta_id : req.params.pesertaId}});
			await Peserta.destroy({where : {id : req.params.pesertaId}});
			res.status(200).send({ msg: "Delete Peserta Berhasil" });
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async kelas(req, res) {
		try {
			await Kelas_Peserta.destroy({where : {id_kelas : req.params.kelasId}});
			await Kelas.destroy({where : {id : req.params.kelasId}, cascade: true, include: [Materi]});
			res.status(200).send({ msg: "Delete Kelas Berhasil" });
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async karya(req, res) {
		try {
			await Karya_Peserta.destroy({where : {karya_id : req.params.karyaId}});
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
			await Materi.destroy({where : {id : req.params.materiId}, cascade: true});
			res.status(200).send({ msg: "Delete Materi Berhasil" });
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async deleteallpeserta(req, res) {
		try {
			await Peserta.destroy({
				where: {},
				cascade: true
			  });
			res.status(200).send({ msg: "Delete Peserta Berhasil" });
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

}

module.exports = AdminDeleteController;
