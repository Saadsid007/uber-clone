const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // <-- Add this line
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const userModel = require('./models/user.model');

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // <-- Add this line

app.use(cors());

// Add this test route in your server.js
app.get('/test/all-users', async (req, res) => {
    try {
        const users = await userModel.find({});
        // console.log('📊 Total users in database:', users.length);
        // console.log('👥 All users:', users);
        res.json({
            count: users.length,
            users: users
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/users', userRoutes);

module.exports = app;