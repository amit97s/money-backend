const Transaction = require('../models/transactionModel');

exports.createTransaction = async (req, res) => {
  try {
    const { date, creditAccount, debitAccount, vnNo } = req.body;
    
    const transaction = await Transaction.create({
      date,
      vnNo: `VN${Date.now()}`,
      creditEntry: {
        account: creditAccount.account,
        amount: creditAccount.amount,
        expenses: creditAccount.expenses || 0,
        narration: creditAccount.narration,
        type: 'credit'
      },
      debitEntry: {
        account: debitAccount.account,
        amount: debitAccount.amount,
        expenses: debitAccount.expenses || 0,
        narration: debitAccount.narration,
        type: 'debit'
      }
    });
    
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTransactions = async (req, res) => {
  try {
    const { ids } = req.body;
    await Transaction.deleteMany({ vnNo: { $in: ids } });
    res.status(200).json({ message: 'Transactions deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
