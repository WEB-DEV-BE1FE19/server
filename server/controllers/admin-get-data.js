const { Admin, Kelas, Materi, Peserta, Berita, Karya } = require("../models");
const { checkPassword } = require("../helpers/cekUser");
const { generateToken } = require("../middlewares/jwt");

class AdminGetController {
	static async adminLogin(req, res, next) {
		try {
			const data = req.body;
			const admin = await Admin.findOne({ where: { username: data.username } });
			if (admin) {
				const checkPw = await checkPassword(data.password, admin.password);
				if (checkPw) {
					const getToken = await generateToken(
						{
							id: admin.id,
							username: admin.username,
						},
						process.env.SECRET_KEY
					);
					if (getToken) {
						res.status(202).json({ token: getToken });
					}
				} else {
					const error = new Error('Username atau Password salah!'); 
                	error.status(406);
                	throw error
				}
			} else {
				const error = new Error('Username atau Password salah!'); 
                error.status(406);
                throw error
			}
		} catch (err) {
			next(err);
		}
	}

	static async peserta(req, res, next) {
		try {
			const datas = await Peserta.findAll();
			res.status(200).send(datas);
		} catch (err) {
			next(err);
		}
	}

	static async kelas(req, res, next) {
		try {
			const datas = await Kelas.findAll();
			res.status(200).send(datas);
		} catch (err) {
			next(err);
		}
	}

	static async karya(req, res, next) {
		try {
			const datas = await Karya.findAll();
			res.status(200).send(datas);
		} catch (err) {
			next(err);
		}
	}

	static async berita(req, res, next) {
		try {
			const datas = await Berita.findAll();
			res.status(200).send(datas);
		} catch (err) {
			next(err);
		}
	}

	static async materi(req, res, next) {
		try {
			const dataKelas = req.params.kelasId;
			const kelas = await Kelas.findOne({ where: { id: dataKelas } });
			const datas = await Materi.findAll({ where: { kelas_id: kelas.id } });
			res.status(200).send(datas);
		} catch (err) {
			next(err);
		}
	}

	static async materiAll(req, res, next) {
		try {
			const datas = await Materi.findAll();
			res.status(200).send(datas);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = AdminGetController;
