const express = require('express');
const router = express.Router();
const { createTransaction, getTransactions, deleteTransactions } = require('../controllers/transactionController');

router.post('/', createTransaction);
router.get('/', getTransactions);
router.delete('/', deleteTransactions);

module.exports = router;