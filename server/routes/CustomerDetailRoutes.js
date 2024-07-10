const express = require('express');
const router = express.Router();
const CustomerDetailController = require('../Controllers/CustomerDetailsController');

// Define routes for lab service CRUD operations
router.get('/Customer-Detail/', CustomerDetailController.getAllCustomerDetails);
router.post('/Customer-Detail/', CustomerDetailController.createCustomerDetail);
router.put('/Customer-Detail/:id', CustomerDetailController.updateCustomerDetail);
router.delete('/Customer-Detail/:id', CustomerDetailController.deleteCustomerDetail);
router.get('/getLatestSNo', CustomerDetailController.getLatestSNo);
module.exports = router;