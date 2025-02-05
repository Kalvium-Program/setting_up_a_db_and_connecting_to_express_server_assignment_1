const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./db');



dotenv.config();


const app = express();

const PORT = process.env.PORT;


const url = process.env.MONGO_URI;




app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});


app.listen(PORT, async() => {
 
  await connectDB(url);
  console.log(`Server is running on port ${PORT}`);
});
