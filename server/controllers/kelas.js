const { Kelas, Materi } = require('../models')

class KelasController {
    static async allClass(req, res) {
        try {
            const datas = await Kelas.findAll()   
            res.status(200).send(datas)
        } catch (error) {
            throw new Error(error)
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