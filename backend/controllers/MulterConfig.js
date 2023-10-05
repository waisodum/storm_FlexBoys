const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `../my-app/public/imgs`);
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-'+ file.originalname);
  }
});
const upload = multer({ storage: storage });
// C:\Users\Aryav Jain\Desktop\Aryav\full php web\SIH\Prototype1\Smart-India-Hackathon\public\imgs
// C:\Users\Aryav Jain\Desktop\Aryav\full php web\SIH\backend\test\sih backend backup\index.js
module.exports=upload;