require("dotenv").config();
const { Peserta, Kelas, Kelas_Peserta, Karya, Karya_Peserta } = require("../models");
const { checkPassword } = require("../helpers/cekUser");
const { generateToken, verifyToken } = require("../middlewares/jwt");
const uploadToCloudinary = require("../helpers/cloudinary");
class UserController {
	static async userLogin(req, res) {
		try {
			const dataLogin = req.body;
			const isPeserta = await Peserta.findOne({ where: { email: dataLogin.email } });
            
			if (isPeserta) {
                const cekPw = await checkPassword(dataLogin.password, isPeserta.password);
				if (cekPw) {
                    const getToken = await generateToken(
                        {
                            id: isPeserta.id, 
                            email: isPeserta.email
                        },process.env.SECRET_KEY);
                    if (getToken) {
                        res.status(200).json({token: getToken});
                    } 
                } else {
					res.status(401).send({ msg: "Email Atau Password Salah!" });
				}
			} else {
				res.status(401).send({ msg: "Email Atau Password Salah!" });
			}
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async userRegister(req, res) {
		try {
            const gambarPortofolio = await uploadToCloudinary(req.files["portofolio"][0])
			const { nama_lengkap, email, password, asal_sekolah } = req.body;
			const newPeserta = await Peserta.create({ nama_lengkap, email, password, asal_sekolah, portofolio: gambarPortofolio });
			res.status(200).json({
                msg: 'Berhasil Daftar',
                data: newPeserta
            })
        } catch (error) {
			console.log(error)
            res.status(500).send({msg: "Internal Server Error"})
        }
	}

	static async userAddKelas(req,res) {
		try {
			const dataToken = await verifyToken(req.headers.token, process.env.SECRET_KEY)
			const peserta = await Peserta.findOne({where:{id: dataToken.id, email: dataToken.email}})
			if (peserta) {
				const pesertaId = peserta.id
				const kelasId = req.params.kelasId
				const cek_kelas_peserta = await Kelas_Peserta.findOne({where: {id_peserta: pesertaId, id_kelas: kelasId}})
				if (cek_kelas_peserta) {
					res.status(400).send({msg: 'Kamu Sudah Bergabung Kelas Ini'})
				} else {
					const kelas_peserta = await Kelas_Peserta.create({
						id_peserta: pesertaId,
						id_kelas: kelasId
					})	
					res.status(200).json({
						msg: 'Berhasil tambah kelas',
						data: kelas_peserta
					})
				}
			} else res.status(401).send({msg: 'unauthorized'})
		} catch (error) {
			res.status(500).send({msg: 'Internal Server Error'})
		}
	}
}

module.exports={UserController}