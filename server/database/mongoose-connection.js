const { log } = console;
const mongoose = require('mongoose'); // Import module..
const db = 'sodaDiner'; // Database name..

// Database structure..
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

const mongoURI = process.env.MONGODB_URI || `mongodb://localhost/${db}`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  log(`Connected to MongoDB Database`);
});

mongoose.connection.on('error', (err) => {
  log(`MongoDB Connection Error:`, err);
});

mongoose.connection.on('disconnected', () => {
  log(`MongoDB Database Disconnected`);
});