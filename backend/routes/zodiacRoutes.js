const express = require('express');
const Zodiac = require('../models/Zodiac');
const router = express.Router();

// Endpoint untuk mendapatkan semua data zodiak
router.get('/zodiacs', async (req, res) => {
    try {
        const zodiacs = await Zodiac.find();
        res.status(200).json(zodiacs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch zodiacs' });
    }
});

module.exports = router;
