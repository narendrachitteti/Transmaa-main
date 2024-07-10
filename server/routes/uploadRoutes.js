const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../Controllers/uploadController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), uploadController.uploadFile);


router.get('/upload/:uniqueID', uploadController.getFilesByUniqueID);

router.get('/download/:filename', uploadController.downloadfileById);

module.exports = router;
