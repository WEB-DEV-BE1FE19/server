const bcrypt = require('bcrypt');

const hashing = async (input) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(input, salt);
        return hash;
    } catch (error) {
        throw new Error('Internal server error');
    }
};

const checkPassword = async (password, hashPassword) => {
    try {
        return await bcrypt.compare(password, hashPassword);
    } catch (error) {
        throw new Error('Internal server error');
    }
};

module.exports = {hashing,checkPassword};