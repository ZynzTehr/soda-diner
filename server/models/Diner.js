// Module imports..
let mongoose = require('mongoose'); // Import module..
let Schema = mongoose.Schema; // Needed for schema creation..

// Schema blueprint..
let DinerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  sodas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'soda'
    }
  ]
});

// Export schema for use..
module.exports = mongoose.model('diner', DinerSchema);
