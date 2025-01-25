const mongoose = require('mongoose');

const connectionString = `mongodb+srv://admin:${process.env.CONNECTION_STRING}@cluster0.hjonx.mongodb.net/`;

console.log(connectionString);
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
