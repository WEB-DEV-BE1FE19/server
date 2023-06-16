const { Kelas, Materi, Peserta, Berita, Karya, Karya_Peserta } = require("../models");
const uploadToCloudinary = require("../helpers/cloudinary");
class AdminPostController {
	static async peserta(req, res, next) {
		try {
			const data = req.body;
			const peserta = await Peserta.findOne({ where: { email: data.email } });
			if (peserta) {
				const error = new Error('Email Peserta Sudah Terdaftar!'); 
                	error.status(406);
                	throw error
			} else {
				const newPeserta = await Peserta.create({
					nama_lengkap: data.nama_lengkap,
					email: data.email,
					password: data.password
				});
				res.status(201).send(newPeserta);
			}
		} catch (err) {
			next(err)
		}
	}

	static async kelas(req, res, next) {
		try {
			const data = req.body;
			const kelas = await Kelas.findOne({ where: { nama_kelas: data.nama_kelas } });
			if (kelas) {
				const error = new Error('Kelas Sudah Ada!'); 
                	error.status(406);
                	throw error
			} else {
				const gambarKelas = await uploadToCloudinary(req.files["gambar_kelas"][0]);
				const newKelas = await Kelas.create({
					nama_kelas: data.nama_kelas,
					kategori_kelas: data.kategori_kelas,
					mentor_kelas: data.mentor_kelas,
					deskripsi_kelas: data.deskripsi_kelas,
					gambar_kelas: gambarKelas,
				});
				res.status(201).send(newKelas);
			}
		} catch (err) {
			next(err)
		}
	}

	static async karya(req, res, next) {
		try {
			const data = req.body;
			const karya = await Karya.findOne({ where: { judul_karya: data.judul_karya } });
			const peserta = await Peserta.findOne({ where: {id: data.peserta_id} })
			if (karya) {
				const error = new Error('Karya Sudah Ada!'); 
                	error.status(406);
                	throw error
			} else {
				const gambarKarya = await uploadToCloudinary(req.files["gambar_karya"][0]);
				const newKarya = await Karya.create({
					judul_karya: data.judul_karya,
					deskripsi_karya: data.deskripsi_karya,
					gambar_karya: gambarKarya,
					peserta_id: data.peserta_id,
				});
				if (newKarya) await Karya_Peserta.create({peserta_id: data.peserta_id,karya_id: newKarya.id})
				res.status(201).send({
					karya: newKarya,
					nama_peserta: peserta.nama_lengkap
				});
			}
		} catch (err) {
			console.log(err)
			next(err)
		}
	}

	static async berita(req, res, next) {
		try {
			const data = req.body;
			const berita = await Berita.findOne({ where: { judul_berita: data.judul_berita } });
			if (berita) {
				const error = new Error('Berita Sudah Ada!'); 
                	error.status(406);
                	throw error
			} else {
				const gambarBerita = await uploadToCloudinary(req.files["gambar_berita"][0]);
				const newBerita = await Berita.create({
					judul_berita: data.judul_berita,
					deskripsi_berita: data.deskripsi_berita,
					gambar_berita: gambarBerita,
					tanggal_dibuat: data.tanggal_dibuat,
				});
				res.status(201).send(newBerita);
			}
		} catch (err) {
			next(err)
		}
	}

	static async materi(req, res, next) {
		try {
			const dataKelas = req.params.kelasId;
			const data = req.body;
			const kelas = await Kelas.findOne({ where: { id: dataKelas } });
			const newMateri = await Materi.create({
				judul_materi: data.judul_materi,
				deskripsi_materi: data.deskripsi_materi,
				video_materi: data.video_materi,
				kelas_id: kelas.id
			});
			res.status(201).send(newMateri);
		} catch (err) {
			next(err)
		}
	}
}

module.exports = AdminPostController;
