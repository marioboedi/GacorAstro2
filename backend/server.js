const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
connectDB();



// Gunakan file rute
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const zodiacRoutes = require('./routes/zodiacRoutes');
app.use('/api', zodiacRoutes);


// Middleware untuk melayani file statis jika diperlukan
app.use(express.static(path.join(__dirname, '../frontend')));

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
