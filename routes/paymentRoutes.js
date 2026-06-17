const express = require('express');
const router = express.Router();
const { getPayments, createPayment, deletePayment } = require('../controllers/paymentController');

router.get('/', getPayments);
router.post('/', createPayment);
router.delete('/:id', deletePayment);

module.exports = router;