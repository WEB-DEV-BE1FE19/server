const { Admin, Kelas, Materi, Peserta, Berita, Karya } = require("../models");
const { checkPassword } = require("../helpers/cekUser");
const { generateToken } = require("../middlewares/jwt")

class AdminGetController {
	static async adminLogin(req, res) {
		try {
			const data = req.body;
			const admin = await Admin.findOne({ where: { username: data.username } });
			if (admin) {
				const checkPw = await checkPassword(data.password, admin.password);
				if (checkPw) {
					const getToken = await generateToken(
                        {
                            id: admin.id, 
                            username: admin.username
                        },process.env.SECRET_KEY);
                    if (getToken) {
                        res.status(200).json({token: getToken});
                    } 				}
			} else {
				res.status(401).json({
					message: "Username / Password Salah",
				});
			}
		} catch (error) {
			res.status(500).json({
				message: "internal server error",
			});
			console.log(error)
		}
	}

	static async peserta(req, res) {
		try {
			const datas = await Peserta.findAll();
			res.status(200).send(datas);
		} catch (error) {
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

	static async karya(req, res) {
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

	static async materi(req, res) {
		try {
			const dataKelas = req.params.kelasId;
			const kelas = await Kelas.findOne({where:{id:dataKelas}})
			const datas = await Materi.findAll({where:{kelas_id:kelas.id}});
			res.status(200).send(datas);
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}
}

module.exports = AdminGetController;
