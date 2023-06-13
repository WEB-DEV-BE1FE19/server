const {Kelas, Karya, Kelas_Peserta, Karya_Peserta } = require('../models')
const { verifyToken } = require('../middlewares/jwt')

class DashboardUser {
    static async kelas(req,res) {
        try {
            const dataToken = await verifyToken(req.headers.token, process.env.SECRET_KEY)
			const dataKelasPeserta = await Kelas_Peserta.findAll({where: {id_peserta: dataToken.id}})
            const kelasId = dataKelasPeserta.map(data => data.id_kelas)
            const kelas = await Kelas.findAll({where: {id: [kelasId]}})
            
            let dashboard = {
                kelas_peserta: kelas
            }
            res.status(200).send(dashboard)
		} catch {
            res.status(500).send({msg: "Internal Server Error"})
        }     
    }
}

module.exports=DashboardUser