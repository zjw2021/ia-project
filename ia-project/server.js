
//Initialize npm dependencies
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

// Load env variables from config file  #route /config/config.env
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' })

//Connect to database
const connectDB = require('./config/database');
connectDB();

// Initialize Body-Parser (Allows access to URL, for retireving volunteer & admin ID's)
app.use(express.json())


app.get('/', (req, res) => {
    res.json({ success: true, msg: 'Connected to volunteer database!'});
})


// Connect volunteer routes to server
const volunteer = require('./routes/volunteer');
app.use('/api/volunteers', volunteer);

// Connect volunteer routes to server
const admin = require('./routes/admin');
app.use('/api/admins', admin);

// Connect application to port in web browser
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));