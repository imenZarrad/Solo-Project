const mongoose = require("mongoose");
const Patient = require("./Patient.js");
const mongoUri = "mongodb://localhost/Patient";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

/**
 * Start writing code below this line
 * 
 */
 
const getAllPatient=(()=>{
  return Patient.find()
})

const createPatient=(patient)=>{
  return Patient.create({
    FirstName:patient.firstName,
    LastName:patient.lastName,
    NumberPhone:patient.numberPhone,
    DateOfAppointment: patient.dateOfAppointment
  })
}

const deletePatient=()=>{
  return Patient.deleteOne()}


  // TODO - your code here!

module.exports = {
   db,
  getAllPatient,
  createPatient,
  deletePatient
  
};
