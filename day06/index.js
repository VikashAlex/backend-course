const express = require("express");
const mongoose = require("mongoose");
const enquiryModel = require('./mongoose.modole')
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect To Mongoose

app.post("/app/enquiry-insert", (req, res) => {

    const {name,email,phone,message}=req.body;

    const enquiry = new enquiryModel({
            name:name,
            email:email,
            phone:phone,
            message:message
    })
    enquiry.save().then(()=>{
        res.send({status:1,Msg:"Data Saved !"});
    }).catch((error)=>{
        res.send({status:0,Msg:"Data Note Save !",error})
    })

});

mongoose.connect(process.env.DBURL).then(() => {
  app.listen(process.env.PORT);
});
