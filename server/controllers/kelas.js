const { Kelas, Materi } = require("../models");

class KelasController {
	static async allClass(req, res, next) {
		try {
			const infoPeserta = req.infoPeserta;
			if (infoPeserta || !infoPeserta) {
				const datas = await Kelas.findAll();
				res.status(200).send(datas);
			} else {
                const error = new Error('Data Tidak Ditemukan'); 
                error.status(404);
                throw error
            }
		} catch (err) {
			next(err);
		}
	}

	static async kelasById(req, res, next) {
		try {
			const kelasById = req.params.kelasId;
			const dataKelas = await Kelas.findOne({ where: { id: kelasById } });
			const dataMateri = await Materi.findAll({ where: { kelas_id: dataKelas.id } });
			res.status(200).json({
				kelas: dataKelas,
				materi: dataMateri,
			});
		} catch {
			const error = new Error("Kelas Tidak Ditemukan");
			error.status = 404;
			next(error);
		}
	}
}

module.exports = { KelasController };
