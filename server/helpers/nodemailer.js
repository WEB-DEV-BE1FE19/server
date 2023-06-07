require('dotenv').config()
const nodemailer = require('nodemailer')

const mail = async (email) => {
    let body = {
        from : "Admin Remedial Gudskull",
        to : email,
        subject: 'Selamat Bergabung Peserta Remedial Gudskull',
        html : '<h3>Raih Pengalaman Belajar Kamu Dengan Mengikuti Berbagai Kelas Yang Tersedia.</h3>'
    }

    let transporter = nodemailer.createTransport({
        service : 'Gmail',
        host : "smtp.ethereal.email",
        port : 587,
        secure : false,
        auth : {
            user : process.env.EMAIL_REMEDIAL,
            pass : process.env.PASSWORD_REMEDIAL
        } 
    })

    transporter.sendMail(body, (err, result) => {
        if (err) {
            console.log(err)
            return false
        }
        console.log('Email has sent');
    })
}

module.exports=mail