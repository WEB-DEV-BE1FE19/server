const { Kelas, Materi, Peserta, Berita, Karya } = require("../models");
class AdminPostController {
	static async peserta(req, res) {
		try {
			const data = req.body;
			const peserta = await Peserta.findOne({where:{email:data.email}})
			if (peserta) {
				res.status(401).send({msg: "Email Peserta Sudah Terdaftar!"})
			} else {
				const newPeserta = await Peserta.create({
					nama_lengkap: data.nama_lengkap,
					email: data.email,
					password: data.password,
					asal_sekolah: data.asal_sekolah,
					portofolio: data.portofolio,
				});
				res.status(200).send(newPeserta);
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async kelas(req, res) {
		try {
			const data = req.body;
			const kelas = await Kelas.findOne({where:{nama_kelas:data.nama_kelas}})
			if (kelas) {
				res.status(401).send({msg: "Kelas Sudah Ada!"})
			} else {
				const newKelas = await Kelas.create({
					nama_kelas: data.nama_kelas,
					kategori_kelas: data.kategori_kelas,
					mentor_kelas: data.mentor_kelas,
					deskripsi_kelas: data.deskripsi_kelas,
					gambar_kelas: data.gambar_kelas,
				});
				res.status(200).send(newKelas);
			}
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async karya(req, res) {
		try {
			const data = req.body;
			const karya = await Karya.findOne({where:{judul_karya:data.judul_karya}})
			if (karya) {
				res.status(401).send({msg: "Karya Sudah Ada!"})
			} else {
				const newKarya = await Karya.create({
					judul_karya: data.judul_karya,
					deskripsi_karya: data.deskripsi_karya,
					gambar_karya: data.gambar_karya,
					peserta_id: data.peserta_id,
				});
				res.status(200).send(newKarya);
			}
		} catch (error) {
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async berita(req, res) {
		try {
			const data = req.body;
			const berita = await Berita.findOne({where:{judul_berita:data.judul_berita}})
			if (berita) {
				res.status(401).send({msg: "Berita Sudah Ada!"})
			} else {
				const newBerita = await Berita.create({
					judul_berita: data.judul_berita,
					deskripsi_berita: data.deskripsi_berita,
					gambar_berita: data.gambar_berita,
					tanggal_dibuat: data.tanggal_dibuat,
				});
				res.status(200).send(newBerita);
			}
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}

	static async materi(req, res) {
		try {
			const dataKelas = req.params.kelasId;
			const data = req.body;
			const kelas = await Kelas.findOne({where:{id:dataKelas}})
			
			const newMateri = await Materi.create({
				judul_materi: data.judul_materi,
				deskripsi_materi: data.deskripsi_materi,
				kelas_id: kelas.id,
			});
			res.status(200).send(newMateri);
			
		} catch (error) {
			console.log(error)
			res.status(500).send({ msg: "Internal Server Error" });
		}
	}
}

module.exports = AdminPostController;
