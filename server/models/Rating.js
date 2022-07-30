const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingSchema = new Schema({
  thumbsUp: {
    type: Number,
    required: true,
    default: 0
  },
  thumbsDown: {
    type: Number,
    required: true,
    default: 0
  },
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
