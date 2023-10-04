const mongoose = require("mongoose");

try {
    
  mongoose.connect("mongodb://127.0.0.1:27017/Uploads");
    const db = mongoose.connection;
    db.once("open", () => {
      console.log("connected to uploads");
    });
} catch (error) {
    console.log("error");
}



const UploadSchema = new mongoose.Schema({
  "id": Number,
            "name": String,
            "event": String,
            "organizerName": String
});

const event = new mongoose.model("event", UploadSchema);
module.exports = event;