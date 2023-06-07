const { Kelas, Materi, Peserta, Berita, Karya } = require("../models");
const { checkPassword } = require("../helpers/hashing");

class AdminPostController {
	static async peserta(req, res) {
		try {
			const data = req.body;
			const peserta = await Peserta.findOne({where:{email:data.email}})
			if (peserta) {
				res.status(401).send({msg: "Email Peserta Sudah Terdaftar!"})
			} else {
				const newPeserta = await Peserta.create({
					nama_lengkap: data.nama_lengkap,
					email: data.email,
					password: data.password,
					asal_sekolah: data.asal_sekolah,
					portofolio: data.portofolio,
				});
				res.status(200).send(newPeserta);
			}
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

module.exports = AdminPostController;
