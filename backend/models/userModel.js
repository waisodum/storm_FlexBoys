const mongoose = require("mongoose");
const validator =require("validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
// const { default: isEmail } = require("validator/lib/isEmail");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please provide a name"],
        maxLength:[30,"Please write your name"],
        minLength:[4,"your name is toShort"],
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please provide Email"],
        validate:[validator.isEmail,"Please write a valide email"]
    },
    password:{
        type:String,
        minLength:[8,"Please write password greater than 8"],
        select:false,
        required:true,

    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordDate:Date
});

// userSchema.pre("save",async function(next){

// if(!this.isModified("password")){
//     this.password = await bcrypt.hash(this.password,10);
// }
// next()

// })

// JWT Token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

// Generating Reset Password token
userSchema.methods.getResetPasswordToken = async function(){
    // creating token using crypto
    const resetToken= crypto.randomBytes(20).toString("hex");

    // now adding resetToken to userSchema

    this.resetPasswordToken = await crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordDate = new Date(Date.now()+15*60*1000);
    return resetToken;
}

module.exports = mongoose.model("User",userSchema);