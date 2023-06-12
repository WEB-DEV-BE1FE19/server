require("dotenv").config();
const { Peserta, Admin } = require('../models')
const { verifyToken } = require('./jwt')

const cekToken = async (req,res,next) => {
    try {
        const data = await verifyToken(req.headers.token, process.env.SECRET_KEY)
        const dataPeserta = await Peserta.findOne({where: {id: data.id, email: data.email}})
        if (!dataPeserta) {
            res.status(401).send({
                msg: "Invalid Token"    })
        } else next()
    } catch (error) {
        res.status(500).send({msg: 'Internal Server Error'})
    }
}

const cekAdmin = async (req,res,next) => {
    try {
        const data = await verifyToken(req.headers.token, process.env.SECRET_KEY)
        if (!data.username) {
            res.status(401).send({msg: "Kamu Tidak Memiliki Akses!"})
        } else {
            const dataAdmin = await Admin.findOne({where: {id: data.id, username: data.username}})
            if (!dataAdmin) {
                res.status(401).send({
                    msg: "Invalid Token"    })
            } else next()
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: 'Internal Server Error'})
    }
}

module.exports={ cekToken, cekAdmin }