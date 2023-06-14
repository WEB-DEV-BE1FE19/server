const { Kelas, Kelas_Peserta, Karya, Karya_Peserta, Berita } = require("../models");
const { verifyToken } = require("../middlewares/jwt");

class AfterLogin {
	static async generateInfoPeserta(req, res, next) {
		try {
            const dataToken = await verifyToken(req.headers.token, process.env.SECRET_KEY)
			const dataKelasPeserta = await Kelas_Peserta.findAll({where: {id_peserta: dataToken.id}})
            const kelasId = dataKelasPeserta.map(data => data.id_kelas)
            const kelas = await Kelas.findAll({where: {id: kelasId}})
            
            let infoPeserta = {
                kelas_peserta: kelas
            }
			req.infoPeserta = infoPeserta
            next()
		} catch (err) {
            next(err)
        }
	}
}

module.exports = AfterLogin;
