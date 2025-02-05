const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { resolve } = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => {
  console.log('Connected to the database');
})
.catch((err) => {
  console.error(err);
});



app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Customers Management System Backend is Running on Port 5000');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
