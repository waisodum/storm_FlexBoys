const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Uploads", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((error) => {
  console.error("Error connecting to MongoDB:");
  process.exit(1); // Exit the process with an error code
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to uploads");
});
// db.on("error", (error) => {
//   console.error("MongoDB connection error:");
//   process.exit(1); // Exit the process with an error code
// });
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
