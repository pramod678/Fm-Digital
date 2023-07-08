const path = require( "path");
const multer  = require('multer')

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "D:/FmDigital-Node_React/Fm-Digital -Backend/public/ImageDocument");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
  });
  const ImageDocument = multer({
    storage: imageStorage,
    limits: {
      files: 1, // Allow up to 2 files to be uploaded at once
      fileSize: 5242880, // 5 megabytes in bytes
    },
  }).fields([
    { name: "ImageDocument", maxCount: 1 },
    
  ]);

  const audioStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "D:/FmDigital-Node_React/Fm-Digital -Backend/public/AudioDocument");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
    
  });
  
  const audioDocument = multer({
    storage: audioStorage,
    limits: {
      fieldNameSize: 200,
      fileSize: 5 * 1024 * 1024,
      files: 10, // Allow up to 2 files to be uploaded at once
      // fileSize: 5242880, // 5 megabytes in bytes
    },
    
  }).fields([
    { name: "AudioDocument", maxCount: 10 },
    
  ]);

 

  module.exports = {ImageDocument,audioDocument};