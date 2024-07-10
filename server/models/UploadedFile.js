const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  uniqueID: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const File = mongoose.model('uploadedfiles', fileSchema);

module.exports = File;
