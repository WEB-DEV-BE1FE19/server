require("dotenv").config();
const { Peserta, Kelas, Kelas_Peserta, Materi } = require("../models");
const { checkPassword } = require("../helpers/cekUser");
const { generateToken, verifyToken } = require("../middlewares/jwt");
const uploadToCloudinary = require("../helpers/cloudinary");
class UserController {
	static async userLogin(req, res, next) {
		try {
			const dataLogin = req.body;
			const isPeserta = await Peserta.findOne({ where: { email: dataLogin.email } });

			if (isPeserta) {
				const cekPw = await checkPassword(dataLogin.password, isPeserta.password);
				if (cekPw) {
					const getToken = await generateToken(
						{
							id: isPeserta.id,
							email: isPeserta.email,
						},
						process.env.SECRET_KEY
					);
					if (getToken) {
						res.status(202).json({ 
							message: 'Berhasil Login',
							nama_lengkap: isPeserta.nama_lengkap, 
							email: isPeserta.email, 
							token: getToken });
					} else {
						const error = new Error("Token tidak valid!");
						error.status = 401;
						next(error);
					}
				} else {
					const error = new Error("Email atau Password salah!");
					error.status = 406;
					next(error);
				}
			} else {
				const error = new Error("Email atau Password salah!");
				error.status = 406;
				next(error);
			}
		} catch (err) {
			next(err)
		}
	}

	static async userRegister(req, res, next) {
		try {
			const { nama_lengkap, email, password } = req.body;
			const newPeserta = await Peserta.create({ nama_lengkap, email, password });
			if (!newPeserta) {
				const error = new Error("Harap Isi Data Dengan Benar!");
				error.status = 406;
				next(error);
			} else {
				res.status(201).json({
					msg: "Berhasil Daftar",
					data: newPeserta,
				});
			}
		} catch (err) {
			next(err);
		}
	}

	static async userAddKelas(req, res, next) {
		try {
			const dataToken = await verifyToken(req.headers.token, process.env.SECRET_KEY);
			const peserta = await Peserta.findOne({ where: { id: dataToken.id, email: dataToken.email } });
			if (peserta) {
				const pesertaId = peserta.id;
				const kelasId = req.params.kelasId;
				const cek_kelas_peserta = await Kelas_Peserta.findOne({ where: { id_peserta: pesertaId, id_kelas: kelasId } });
				if (cek_kelas_peserta) {
					const error = new Error("Kamu Sudah Bergabung Di Kelas Ini!");
					error.status = 406;
					next(error);
				} else {
					const kelas_peserta = await Kelas_Peserta.create({
						id_peserta: pesertaId,
						id_kelas: kelasId,
					});
					res.status(202).json({
						msg: "Berhasil tambah kelas",
						data: kelas_peserta,
					});
				}
			} else throw new Error('Kamu tidak memiliki akses')
		} catch (err) {
			next(err);
		}
	}

	static async userGetMateri(req, res, next) {
		try {
			const dataToken = await verifyToken(req.headers.token, process.env.SECRET_KEY);
			const peserta = await Peserta.findOne({ where: { id: dataToken.id, email: dataToken.email } });
			if (peserta) {
				const pesertaId = peserta.id;
				const kelasId = req.params.kelasId;
				const cek_kelas_peserta = await Kelas_Peserta.findOne({ where: { id_peserta: pesertaId, id_kelas: kelasId } });
				if (!cek_kelas_peserta) {
					const error = new Error("Kamu Belum Bergabung Di Kelas Ini!");
					error.status = 406;
					next(error);
				} else {
					const kelas = await Kelas.findOne({where: {id: kelasId}})
					const materi = await Materi.findAll({where: {kelas_id: kelas.id}})
					res.status(200).json({
						kelas: kelas,
						materi: materi
					})
				}
			} else throw new Error('Kamu tidak memiliki akses')
		} catch (err) {
			next(err)
		}
	}
}

module.exports = { UserController };
