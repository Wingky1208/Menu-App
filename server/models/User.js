const mongoose = require('mongoose');

const { Schema } = mongoose;
const Order = require('./Order');
const Rating = require('./Rating');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema],
  ratings: [Rating.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
