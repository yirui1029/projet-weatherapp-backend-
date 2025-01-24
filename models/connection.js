const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:!HFD8EpU!F6cQPq@cluster0.hjonx.mongodb.net/WeatherApp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
