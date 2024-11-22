const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); // Tidak perlu opsi tambahan
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Keluar dari proses jika koneksi gagal
    }
};

module.exports = connectDB;
