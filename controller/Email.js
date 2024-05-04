const EmailModel = require("../model/Email");

async function createPost(req, res) {
    console.log('No file uploaded');
    console.log('No file uploaded', req.body);
    const { emailAddress, firstName, message, phoneNumber, getinTouch } = req.body;
    
    try {
       
        const newMail = new EmailModel({
            emailAddress, // Changed to match the schema field name
            firstName,
            message,
            phoneNumber,
            getinTouch,
        });

        const newMailDone = await newMail.save();
        res.status(201).json({ newMailDone });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createPost };
