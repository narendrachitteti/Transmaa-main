const File = require('../models/UploadedFile');
const path = require('path'); // Add this line to import the path module


exports.uploadFile = async (req, res) => {
  try {
    const { uniqueID } = req.body;
    const { filename } = req.file;

    const newFile = new File({
      uniqueID,
      filename
    });

    await newFile.save();

    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exports.getFilesByUniqueID = async (req, res) => {
//   try {
//     const { uniqueID } = req.params;
//     const files = await File.find({ uniqueID });

//     res.status(200).json({ files });
//   } catch (error) {
//     console.error('Error fetching files:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
exports.getFilesByUniqueID = async (req, res) => {
  try {
    const { uniqueID } = req.params; // Access uniqueID from req.params
    const files = await File.find({ uniqueID }); // Query files by uniqueID

    res.status(200).json({ files });
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.downloadfileById = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../uploads/', filename);
    res.download(filePath, filename, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};