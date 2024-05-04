const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    emailAddress: { // Changed from 'email' to 'emailAddress'
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    getinTouch: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, { timestamps: true });

const EmailModel = mongoose.model("Email", emailSchema); // Changed variable name to EmailModel

module.exports = EmailModel
