const { Kelas, Materi } = require('../models')

class KelasController {
    static async allClass(req, res) {
        try {
            const infoPeserta = req.infoPeserta
            if (infoPeserta || !infoPeserta) {
                const datas = await Kelas.findAll()   
                res.status(200).send(datas)
            }
        } catch (error) {
            res.status(500).send({msg: "Interna Server Error"})
        }
    }

    static async kelasById(req,res) {
        try {
            const kelasById = req.params.kelasId
            const dataKelas = await Kelas.findOne({where: {id: kelasById}})
            const dataMateri = await Materi.findAll({where: {kelas_id: dataKelas.id}})
            res.status(200).json({
                kelas: dataKelas,
                materi: dataMateri
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports={KelasController}