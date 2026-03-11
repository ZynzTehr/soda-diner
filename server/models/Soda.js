// Module imports..
let mongoose = require('mongoose'); // Import module..
let Schema = mongoose.Schema; // Needed for schema creation..

// Schema blueprint..
let SodaSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true,
  },
  fizziness: {
    type: Number,
    required: true
  },
  taste_rating: {
    type: Number,
    required: true
  },
  served: {
    type: Boolean,
    default: false
  }
});

// Export schema for use..
module.exports = mongoose.model('soda', SodaSchema);