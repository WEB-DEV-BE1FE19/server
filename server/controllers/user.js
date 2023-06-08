require("dotenv").config();
const { Peserta } = require("../models");
const { checkPassword } = require("../helpers/cekUser");
const { generateToken } = require("../middlewares/jwt");
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
}

module.exports=UserController