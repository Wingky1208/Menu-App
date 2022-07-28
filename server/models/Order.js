const mongoose = require('mongoose');

const { Schema } = mongoose;
const Item = require('./Item');

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  items: [Item.Schema]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;