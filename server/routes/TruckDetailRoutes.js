const express = require('express');
const router = express.Router();
const TruckDetailController = require('../Controllers/TruckDetailsController');
const upload = require('../helpers/fileUpload.js');
// Define routes for lab service CRUD operations
router.get('/Truck-Detail/', TruckDetailController.getAllTruckDetails);
router.post('/Truck-Detail/', TruckDetailController.createTruckDetail);
router.put('/Truck-Detail/:id', TruckDetailController.updateTruckDetail);
router.delete('/Truck-Detail/:id', TruckDetailController.deleteTruckDetail);
router.get('/getLatestuniqueID', TruckDetailController.getLatestSNo);
module.exports = router;