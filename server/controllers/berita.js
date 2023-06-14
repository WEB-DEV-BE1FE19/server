const { Berita } = require('../models')

class BeritaController {
    static async allNews(req, res) {
        try {
            const datas = await Berita.findAll()
            if (datas) {
                res.status(200).send(datas)
            } else {
                const error = new Error('Data Tidak Ditemukan'); 
                error.status(404);
                throw error
            }
        } catch (err) {
            next(err)
        }
    }

    static async newsById(req, res) {
        try {
            const newsId = req.params.beritaId;
            const datas = await Berita.findOne({where:{id:newsId}})   
            if (datas) {
                res.status(200).send(datas)
            } else {
                const error = new Error("Berita Tidak Ditemukan");
                error.status = 404;
                next(error);
            }
        } catch {
            const error = new Error("Berita Tidak Ditemukan");
			error.status = 404;
			next(error);        
        }
    }
}

module.exports={BeritaController}