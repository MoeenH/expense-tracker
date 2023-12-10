const mongoose = require('mongoose');
require('dotenv').config();

require('dotenv').config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//const MONGO_URL="mongodb+srv://moeenhaider17:Os0vRaK7fGLeBcDU@cluster0.ywqzt2a.mongodb.net/?retryWrites=true&w=majority";
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}