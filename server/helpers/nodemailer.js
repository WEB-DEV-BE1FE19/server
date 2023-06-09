require('dotenv').config()
const nodemailer = require('nodemailer')

const mail = async (email) => {
    let body = {
        from : '"Tim Serrum Gudskul" <remedialproject1@gmail.com>',
        to : email,
        subject: 'Selamat Bergabung Peserta Remedial Serrum Gudskul.',
        html : `
                <center><img src="https://i.postimg.cc/sf4xFrzw/logo-serrum.png">
                <br><h3><b>Ayo Raih Pengalaman Belajar Kamu Dengan Mengikuti Berbagai Kelas Yang Tersedia 🚀</b></h3>
                <br>Hai 🙌, Peserta <strong>Remedial Serrum Gudskull</strong>.
                Jika ada pertanyaan silahkan balas email ini atau hubungi Kakak-Kakak Admin kita ya 😁
                </center>
                `
    }

    let transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port : 465,
        secure : true,
        auth : {
            user : "remedialproject1@gmail.com",
            pass : "vxddvyviupkitcff"
        } 
    })

    transporter.sendMail(body, (err, result) => {
        if (err) {
            throw new Error(err)
        }
    })
}

module.exports=mail