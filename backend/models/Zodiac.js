const mongoose = require('mongoose');

const ZodiacSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  dateRange: { type: String, required: true },
  startDate: {
    day: { type: Number, required: true },
    month: { type: Number, required: true }
  },
  endDate: {
    day: { type: Number, required: true },
    month: { type: Number, required: true }
  },
  link: { type: String, required: false } // opsional
});


const Zodiac = mongoose.model('Zodiac', ZodiacSchema);

module.exports = Zodiac;
