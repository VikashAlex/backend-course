const mongoose = require('mongoose');
const { type } = require('os');

const userEnquerySchema =  mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
let enquiryModel =  mongoose.model("enquiry",userEnquerySchema);

module.exports=enquiryModel;