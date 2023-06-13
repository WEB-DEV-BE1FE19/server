require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.APIKEY, 
    api_secret: process.env.APISECRET,
    secure: true
})

const uploadToCloudinary = (file) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(file.path, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      });
    });
  };

module.exports=uploadToCloudinary