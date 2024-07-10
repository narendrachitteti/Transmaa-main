const express = require('express');
const router = express.Router();
const CustomerDetailController = require('../Controllers/CustomerDeleteController');

// Define routes for lab service CRUD operations
router.get('/Customer-Delete-details/', CustomerDetailController.getAllDeletedCustomerDetails);
router.put('/Customer-Restore/:id', CustomerDetailController.deletedCustomerRestore);
router.delete('/Customer-Delete/:id', CustomerDetailController.deleteDeletedCustomerDetail);
router.get('/getDeleteLatestSNo', CustomerDetailController.getLatestSNo);
module.exports = router;