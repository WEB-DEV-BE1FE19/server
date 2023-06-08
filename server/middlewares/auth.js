require("dotenv").config();
const { Peserta } = require('../models')
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

module.exports=cekToken