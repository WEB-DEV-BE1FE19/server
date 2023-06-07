const jwt = require('jsonwebtoken')

const generateToken = async (payload, secretKey) => {
    return await jwt.sign(payload, secretKey)
}

const verifyToken = async (payload, secretKey) => {
    return await jwt.verify(payload, secretKey)
}

module.exports={generateToken,verifyToken}