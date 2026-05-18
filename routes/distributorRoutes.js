const express = require('express');
const router = express.Router();
const {
  getDistributors,
  getDistributor,
  createDistributor,
  updateDistributor,
  deleteDistributor
} = require('../controllers/distributorController');

router.get('/',       getDistributors);
router.get('/:id',    getDistributor);
router.post('/',      createDistributor);
router.put('/:id',    updateDistributor);
router.delete('/:id', deleteDistributor);

module.exports = router;