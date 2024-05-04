const express= require("express");
const { connectMongoDb } = require("./connect");
const app = express()
const PORT = 5000;
const dotenv = require("dotenv")
const cors = require("cors")
const sendEmail = require('./routes/email');


app.use(express.json())
dotenv.config()

app.use(cors())


connectMongoDb(process.env.URI).then(()=>{
    console.log('MongoDb connected')
    app.listen(PORT , (err)=>{
        if (err) console.log(err)
        console.log("Sucessfully running at ", PORT)
    })
}).catch((error)=>{
    console.log(error)


})

app.get("/email", (req,res)=>{
    res.send("/email send")
} )

app.use("/email", sendEmail )



