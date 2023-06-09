const { Karya } = require('../models')

class KaryaController {
    static async allArt(req, res) {
        try {
            const datas = await Karya.findAll()   
            res.status(200).send(datas)
        } catch (error) {
            throw new Error(error)
        }
    }

    static async artById(req, res) {
        try {
            const artId = req.params.karyaId;
            const datas = await karya.findOne({where:{id:artId}})   
            res.status(200).send(datas)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports={KaryaController}