require("dotenv").config();
const { Peserta, Kelas, Kelas_Peserta, Karya, Karya_Peserta } = require("../models");
const { checkPassword } = require("../helpers/cekUser");
const { generateToken, verifyToken } = require("../middlewares/jwt");
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
			const { nama_lengkap, email, password, asal_sekolah, portofolio } = req.body;
			const newPeserta = await Peserta.create({ nama_lengkap, email, password, asal_sekolah, portofolio });
            res.status(200).json({
                msg: 'Berhasil Daftar',
                data: newPeserta
            })
        } catch (error) {
            res.status(500).send({msg: "Internal Server Error"})
        }
	}

	static async userAddKelas(req,res,next) {
		try {
			const dataToken = await verifyToken(req.headers.token, process.env.SECRET_KEY)
			const peserta = await Peserta.findOne({where:{id: dataToken.id, email: dataToken.email}})
			if (peserta) {
				const pesertaId = peserta.id
				const kelasId = req.params.kelasId
				const kelas_peserta = await Kelas_Peserta.create({id_peserta:pesertaId, id_kelas:kelasId})	
				if (kelas_peserta) {
					const kelas = await Kelas.findOne({where:{id_peserta: kelas_peserta.id_peserta, id_kelas: kelas_peserta.id_kelas}})
					res.status(200).json({
						msg: 'Berhasil tambah kelas',
						data: kelas
					})
					next()
				}
			} else res.status(401)
		} catch (error) {
			res.status(500).send({msg: 'Internal Server Error'})
		}
	}
}

module.exports={UserController}