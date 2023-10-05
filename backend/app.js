const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DbConnect = require("./database.js");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

dotenv.config();
DbConnect()
app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT;

// routing

const user = require("./routes/userRoute");

app.use("/api/v1",user);

app.get("/",(req,res)=>{
    res.send("hello")
})

const server = app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
})

