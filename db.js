// db.js

const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Atlas Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;