const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Uploads");

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to uploads");
});

const UploadSchema = new mongoose.Schema({
eventName: String,
// Date: Date,
category: String,
// oragnisedby: String,
desc: String,
path:String
});

const UpLoad = new mongoose.model("event", UploadSchema);
module.exports = UpLoad;
