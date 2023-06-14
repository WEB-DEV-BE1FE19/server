require("dotenv").config();
const { Peserta, Admin } = require('../models')
const { verifyToken } = require('./jwt')

const cekToken = async (req,res,next) => {
    try {
        const data = await verifyToken(req.headers.token, process.env.SECRET_KEY)
        req.params.pesertaId = data.id
        if (!data.email) {
            const error = new Error("Token tidak valid!");
			error.status = 401;
			next(error);
        } else {
            const dataPeserta = await Peserta.findOne({where: {id: data.id, email: data.email}})
            if (!dataPeserta) {
                const error = new Error("Token tidak valid!");
				error.status = 401;
				next(error);
            } else next()
        }
    } catch {
        const error = new Error("Login Terlebih Dahulu!");
		error.status = 401;
		next(error);
    }
}

const cekAdmin = async (req,res,next) => {
    try {
        const data = await verifyToken(req.headers.token, process.env.SECRET_KEY)
        if (!data.username) {
            const error = new Error("Token tidak valid!");
			error.status = 401;
			next(error);
        } else {
            const dataAdmin = await Admin.findOne({where: {id: data.id, username: data.username}})
            if (!dataAdmin) {
                const error = new Error("Token tidak valid!");
				error.status = 401;
				next(error);    
            } else next()
        }
    } catch {
        const error = new Error("Silahkan Login Sebagai Admin");
		error.status = 401;
		next(error);
    }
}

module.exports={ cekToken, cekAdmin }