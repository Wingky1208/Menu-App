const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
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

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
