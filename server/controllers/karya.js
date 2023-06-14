const { Karya } = require('../models')

class KaryaController {
    static async allArt(req, res, next) {
        try {
            const datas = await Karya.findAll()   
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

    static async artById(req, res, next) {
        try {
            const artId = req.params.karyaId;
            const datas = await Karya.findOne({where:{id:artId}})
            if (datas) {
                res.status(200).send(datas)
            } else {
                const error = new Error("Karya Tidak Ditemukan");
                error.status = 404;
                next(error);
            }
        } catch {
            const error = new Error("Karya Tidak Ditemukan");
            error.status = 404;
            next(error);
		}
    }
}

module.exports={KaryaController}