require('dotenv').config()
const nodemailer = require('nodemailer')

const mail = async (email) => {
    let body = {
        from : '"Tim Remedial Gudskull" <remedialproject1@gmail.com>',
        to : email,
        subject: 'Selamat Bergabung Peserta Remedial Gudskull.',
        html : '<h3>Raih Pengalaman Belajar Kamu Dengan Mengikuti Berbagai Kelas Yang Tersedia.</h3>'
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