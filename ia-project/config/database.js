
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    // Create connection between mongodb and mongoose
    const connection = await 
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        });
    console.log(`Database Connected: ${connection.connection.host}`)
};

module.exports = connectDB;