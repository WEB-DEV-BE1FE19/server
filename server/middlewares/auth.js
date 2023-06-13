require("dotenv").config();
const { Peserta, Admin } = require('../models')
const { verifyToken } = require('./jwt')

const cekToken = async (req,res,next) => {
    try {
        const data = await verifyToken(req.headers.token, process.env.SECRET_KEY)
        req.params.pesertaId = data.id
        if (!data.email) {
            res.status(401).send({msg: 'Invalid Token!'})
        } else {
            const dataPeserta = await Peserta.findOne({where: {id: data.id, email: data.email}})
            if (!dataPeserta) {
                res.status(401).send({msg: 'Invalid Token!'})
            } else next()
        }
    } catch (error) {
        res.status(401).send({msg: 'Login Terlebih Dahulu!'})
    }
}

const cekAdmin = async (req,res,next) => {
    try {
        const data = await verifyToken(req.headers.token, process.env.SECRET_KEY)
        if (!data.username) {
            res.status(401).send({msg: "Invalid Token!"})
        } else {
            const dataAdmin = await Admin.findOne({where: {id: data.id, username: data.username}})
            if (!dataAdmin) {
                res.status(401).send({msg: "Invalid Token"})
            } else next()
        }
    } catch (error) {
        res.status(401).send({msg: "Silahkan Login Sebagai Admin!"})
    }
}

module.exports={ cekToken, cekAdmin }