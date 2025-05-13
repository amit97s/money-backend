const mongoose = require('mongoose');

const transactionEntrySchema = new mongoose.Schema({
  account: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    default: 0
  },
  narration: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['credit', 'debit'],
    required: true
  }
});

const transactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  vnNo: {
    type: String,
    required: true,
    unique: true
  },
  creditEntry: transactionEntrySchema,
  debitEntry: transactionEntrySchema
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);