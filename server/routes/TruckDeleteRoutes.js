const express = require('express');
const router = express.Router();
const TruckDetailController = require('../Controllers/TruckDeleteController');

// Define routes for lab service CRUD operations
router.get('/Truck-Delete-Details/', TruckDetailController.getAllDeleteTruck);
router.delete('/Truck-Delete/:id', TruckDetailController.deleteDeletedTruck);
// router.delete('/Truck-Restore/:id', TruckDetailController.deleteTruckRestore);
router.put('/Truck-Restore/:id', TruckDetailController.deleteTruckRestore);
router.get('/getDeleteLatestuniqueID', TruckDetailController.getLatestSNo);
module.exports = router;
