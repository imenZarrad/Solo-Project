const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const patientSchema = new mongoose.Schema({
   
    FirstName:String,
    LastName:String,
    NumberPhone:Number,
    DateOfAppointment:Date

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
