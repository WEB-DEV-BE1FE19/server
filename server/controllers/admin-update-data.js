const { Kelas, Materi, Peserta, Berita, Karya } = require("../models");
const uploadToCloudinary = require('../helpers/cloudinary')
class AdminUpdateController {
	static async peserta(req, res) {
		try {
			const dataPeserta = req.params.pesertaId;
			const {nama_lengkap, email, password, asal_sekolah, portofolio} = req.body
			const peserta = await Peserta.findOne({where:{id:dataPeserta}})
			if (peserta) {
				const porto = await uploadToCloudinary(req.files["portofolio"][0])
				await Peserta.update({
					nama_lengkap,
					email,
					password,
					asal_sekolah,
					portofolio: porto,
				}, {where:{id:dataPeserta}});
				res.status(200).send({msg: "Update Peserta Berhasil"})
			} else {
				res.status(401).send({msg: "Peserta Tidak Ada"})
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async kelas(req, res) {
		try {
			const dataKelas = req.params.kelasId;
			const {nama_kelas, kategori_kelas, mentor_kelas, deskripsi_kelas, gambar_kelas} = req.body
			const kelas = await Kelas.findOne({where:{id:dataKelas}})
			if (kelas) {
				const gambarKelas = await uploadToCloudinary(req.files["gambar_kelas"][0])
				await Kelas.update({
					nama_kelas,
					kategori_kelas,
					mentor_kelas,
					deskripsi_kelas,
					gambar_kelas: gambarKelas,
				}, {where:{id:dataKelas}});
				res.status(200).send({msg: "Update Kelas Berhasil"})
			} else {
				res.status(401).send({msg: "Kelas Tidak Ada"})
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async karya(req, res) {
		try {
			const dataKarya = req.params.karyaId;
			const {judul_karya, deskripsi_karya, gambar_karya, peserta_id} = req.body
			const karya = await Karya.findOne({where:{id:dataKarya}})
			if (karya) {
				const gambarKarya = await uploadToCloudinary(req.files["gambar_karya"][0])
				await Karya.update({
					judul_karya,
					deskripsi_karya,
					gambar_karya: gambarKarya,
					peserta_id,
				}, {where:{id:dataKarya}});
				res.status(200).send({msg: "Update Karya Berhasil"})
			} else {
				res.status(401).send({msg: "Karya Tidak Ada"})
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async berita(req, res) {
		try {
			const dataBerita = req.params.beritaId;
			const {judul_berita, deskripsi_berita, gambar_berita} = req.body
			const berita = await Berita.findOne({where:{id:dataBerita}})
			if (berita) {
				const gambarBerita = await uploadToCloudinary(req.files["gambar_berita"][0])
				await Berita.update({
					judul_berita,
					deskripsi_berita,
					gambar_berita: gambarBerita,
				}, {where:{id:dataBerita}});
				res.status(200).send({msg: "Update Berita Berhasil"})
			} else {
				res.status(401).send({msg: "Berita Tidak Ada"})
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async materi(req, res) {
		try {
			const dataKelas = req.params.kelasId;
			const dataMateri = req.params.materiId;
			const kelas = await Kelas.findOne({where:{id:dataKelas}})
			const {judul_materi, deskripsi_materi, kelas_id} = req.body
			const materi = await Materi.findOne({where:{id:dataMateri}})
			if (materi) {
				await Materi.update({
					judul_materi,
					deskripsi_materi,
					kelas_id: kelas.id,
				}, {where:{id:dataMateri}});
				res.status(200).send({msg: "Update Materi Berhasil"})
			} else {
				res.status(401).send({msg: "Materi Tidak Ada"})
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}
}

module.exports = AdminUpdateController;
