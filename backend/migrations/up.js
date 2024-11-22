const mongoose = require('mongoose');
const Zodiac = require('../models/Zodiac'); // Pastikan jalur sesuai
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/GacorAstro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected for migration'))
  .catch((err) => console.error('Database connection error:', err));

const migrateUp = async () => {
  const zodiacData = [
    { name: 'Capricorn', symbol: 'P', dateRange: '22 December - 19 January', startDate: { day: 22, month: 12 }, endDate: { day: 19, month: 1 }, link: 'zodiak/capricorn.html' },
    { name: 'Aquarius', symbol: 'Q', dateRange: '20 January - 18 February', startDate: { day: 20, month: 1 }, endDate: { day: 18, month: 2 }, link: 'zodiak/aquarius.html' },
    { name: 'Pisces', symbol: 'S', dateRange: '19 February - 20 March', startDate: { day: 19, month: 2 }, endDate: { day: 20, month: 3 }, link: 'zodiak/pisces.html' },
    { name: 'Aries', symbol: 'N', dateRange: '21 March - 19 April', startDate: { day: 21, month: 3 }, endDate: { day: 19, month: 4 }, link: 'zodiak/aries.html' },
    { name: 'Taurus', symbol: 'O', dateRange: '20 April - 20 May', startDate: { day: 20, month: 4 }, endDate: { day: 20, month: 5 }, link: 'zodiak/taurus.html' },
    { name: 'Gemini', symbol: 'R', dateRange: '21 May - 20 June', startDate: { day: 21, month: 5 }, endDate: { day: 20, month: 6 }, link: 'zodiak/gemini.html' },
    { name: 'Cancer', symbol: 'T', dateRange: '21 June - 22 July', startDate: { day: 21, month: 6 }, endDate: { day: 22, month: 7 }, link: 'zodiak/cancer.html' },
    { name: 'Leo', symbol: 'U', dateRange: '23 July - 22 August', startDate: { day: 23, month: 7 }, endDate: { day: 22, month: 8 }, link: 'zodiak/leo.html' },
    { name: 'Virgo', symbol: 'V', dateRange: '23 August - 22 September', startDate: { day: 23, month: 8 }, endDate: { day: 22, month: 9 }, link: 'zodiak/virgo.html' },
    { name: 'Libra', symbol: 'W', dateRange: '23 September - 22 October', startDate: { day: 23, month: 9 }, endDate: { day: 22, month: 10 }, link: 'zodiak/libra.html' },
    { name: 'Scorpio', symbol: 'X', dateRange: '23 October - 21 November', startDate: { day: 23, month: 10 }, endDate: { day: 21, month: 11 }, link: 'zodiak/scorpio.html' },
    { name: 'Sagittarius', symbol: 'Y', dateRange: '22 November - 21 December', startDate: { day: 22, month: 11 }, endDate: { day: 21, month: 12 }, link: 'zodiak/sagittarius.html' },
  ];
  

  try {
    await Zodiac.insertMany(zodiacData);
    console.log('Zodiac data has been added!');
    process.exit(0); // Keluar setelah migrasi selesai
  } catch (err) {
    console.error('Error adding zodiac data:', err);
    process.exit(1);
  }
};

migrateUp();
