//saving data to sandbox by defining schema
const mongoose = require('mongoose');

const Postschema = mongoose.Schema({

   //all the fields are made as objects for not to leave the field blank
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        default: Date.now
    }
})

module.exports= mongoose.model('Posts',Postschema)

