const mongoose = require('mongoose');
const Zodiac = require('../models/Zodiac');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/GacorAstro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected for rollback'))
  .catch((err) => console.error('Database connection error:', err));

const migrateDown = async () => {
  try {
    await Zodiac.deleteMany({});
    console.log('Zodiac data has been removed!');
    process.exit(0); // Keluar setelah rollback selesai
  } catch (err) {
    console.error('Error removing zodiac data:', err);
    process.exit(1);
  }
};

migrateDown();
