require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const app = express();
app.use(express.json());
app.use('/api', routes)

// connect mongodb database 
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
// end 
// server connection
app.listen(6000, () => {
    console.log(`Server Started at ${6000}`)
})
// end

