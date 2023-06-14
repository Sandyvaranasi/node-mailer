const { Schema , model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    fullName: {
        type: String,
        require: true
    }
}, {timestamps:true});

module.exports = model("otp", userSchema)