const mongoose = require('mongoose');
const validator = require('validator');

const photoSchema = mongoose.Schema({
  hash: {
    type: String,
    unique: true,
    required: [true, 'Image must have a hash'],
  },
  description: {
    type: String,
  },
  locationFamily: {
    type: String,
    required: [true, 'Image must belong to a location family'],
  },
  path: {
    type: String,
    unique: true,
    required: [true, 'Image must have a path'],
  },
  originYear: {
    type: String,
    required: [true, 'Image must have an origin year'],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Image must be associated with an owner email'],
    validate: [validator.isEmail, 'Please provide a valid email!'],
  },
  uploadedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
