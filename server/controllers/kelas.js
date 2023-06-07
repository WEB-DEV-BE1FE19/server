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
}

module.exports={KelasController}