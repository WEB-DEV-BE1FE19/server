const { Kelas, Materi, Peserta, Berita, Karya } = require("../models");
const { checkPassword } = require("../helpers/hashing");

class AdminDeleteController {
	static async peserta(req, res) {
		try {
			await Peserta.destroy({where : {id : req.params.pesertaId}});
			res.status(200).send({ msg: "Delete Berhasil" });
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async kelas(req, res) {
		try {
			const datas = await Kelas.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async karyaSiswa(req, res) {
		try {
			const datas = await Karya.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async berita(req, res) {
		try {
			const datas = await Berita.findAll();
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}
}

module.exports = AdminDeleteController;
