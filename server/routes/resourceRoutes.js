const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.get('/', resourceController.getResources);
router.post('/', resourceController.createResource);
router.delete('/:id', resourceController.deleteResource);
router.get('/market-prices', resourceController.getMarketPrices);

module.exports = router;
