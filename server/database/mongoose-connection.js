const { log } = console;
const mongoose = require('mongoose'); // Import module..
const db = 'sodaDiner'; // Database name..

// Database structure..
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${db}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);
mongoose.connection.on('connected', () => {
  log(`Connected to ${db} Database`);
});
mongoose.connection.on('error', () => {
  log(`Data Connection Error to ${db} Database`, error);
  process.exit(1);
});
mongoose.connection.on('disconnected', () => {
  log(`${db} Database Disconnected`);
});