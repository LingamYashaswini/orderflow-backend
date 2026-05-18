const express = require('express');
const router = express.Router();
const {
  getOrders,
  getOrdersByDistributor,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController');

router.get('/',                          getOrders);
router.get('/distributor/:distributorId', getOrdersByDistributor);
router.post('/',                         createOrder);
router.put('/:id',                       updateOrder);
router.delete('/:id',                    deleteOrder);

module.exports = router;