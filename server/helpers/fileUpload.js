const multer = require('multer');
const path = require('path');

// Set storage engine

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the directory where files will be stored
    },
    filename: (req, file, cb) => {
      const fileName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
      cb(null, fileName);
    },
  });
  
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Set a file size limit (1MB in this example)
    fileFilter: (req, file, cb) => {
      // Check file type
      const filetypes = /jpeg|jpg|png|pdf/;
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = filetypes.test(file.mimetype);
  
      if (extname && mimetype) {
        return cb(null, true);
      } else {
        cb('Error: Only image files and PDFs are allowed!');
      }
    },
  });

module.exports = upload;
