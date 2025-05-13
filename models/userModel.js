const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['creditor', 'debtor']
  },
  group: {
    type: String,
    required: true,
    enum: ['cash-in-hand', 'liabilities', 'assets', 'bank']
  },
  amount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);