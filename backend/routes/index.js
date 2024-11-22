const express = require('express');
const path = require('path');
const router = express.Router();

// Rute untuk mengirimkan file index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/index.html'));
});

module.exports = router;
