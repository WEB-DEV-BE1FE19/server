const { Kelas, Materi, Peserta, Berita, Karya, Kelas_Peserta, Karya_Peserta } = require("../models");
class AdminDeleteController {
	static async peserta(req, res, next) {
		try {
			await Kelas_Peserta.destroy({ where: { id_peserta: req.params.pesertaId } });
			await Karya_Peserta.destroy({ where: { peserta_id: req.params.pesertaId } });
			await Karya.destroy({ where: { peserta_id: req.params.pesertaId }, cascade: true });
			await Peserta.destroy({ where: { id: req.params.pesertaId }, cascade: true });
			res.status(204).send({ msg: "Delete Peserta Berhasil" });
		} catch (err) {
			next(err);
		}
	}

	static async kelas(req, res, next) {
		try {
			await Kelas_Peserta.destroy({ where: { id_kelas: req.params.kelasId } });
			await Kelas.destroy({ where: { id: req.params.kelasId }, cascade: true, include: [Materi] });
			res.status(204).send({ msg: "Delete Kelas Berhasil" });
		} catch (err) {
			next(err);
		}
	}

	static async karya(req, res, next) {
		try {
			await Karya_Peserta.destroy({ where: { karya_id: req.params.karyaId } });
			await Karya.destroy({ where: { id: req.params.karyaId }, cascade: true });
			res.status(204).send({ msg: "Delete Karya Berhasil" });
		} catch (err) {
			next(err);
		}
	}

	static async berita(req, res, next) {
		try {
			await Berita.destroy({ where: { id: req.params.beritaId } });
			res.status(204).send({ msg: "Delete Berita Berhasil" });
		} catch (err) {
			next(err);
		}
	}

	static async materi(req, res, next) {
		try {
			await Materi.destroy({ where: { id: req.params.materiId }, cascade: true });
			res.status(204).send({ msg: "Delete Materi Berhasil" });
		} catch (err) {
			next(err);
		}
	}

	static async deleteallpeserta(req, res, next) {
		try {
			await Peserta.destroy({
				where: {},
				cascade: true,
			});
			res.status(204).send({ msg: "Delete Peserta Berhasil" });
		} catch (err) {
			next(err);
		}
	}
}

module.exports = AdminDeleteController;
