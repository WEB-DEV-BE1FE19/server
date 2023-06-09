const { Berita } = require('../models')

class BeritaController {
    static async allNews(req, res) {
        try {
            const datas = await Berita.findAll()   
            res.status(200).send(datas)
        } catch (error) {
            throw new Error(error)
        }
    }

    static async newsById(req, res) {
        try {
            const newsId = req.params.beritaId;
            const datas = await Berita.findOne({where:{id:newsId}})   
            res.status(200).send(datas)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports={BeritaController}