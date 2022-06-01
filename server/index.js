const express = require('express');
const path = require('path');
const {getAllPatient, createPatient,deletePatient} = require ('../database/index.js')
const db = require('../database');
const PORT = 3000;
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/patient',(req,res)=>{
getAllPatient().then((result)=>{
  res.json(result)
})

})

app.post('/api/patient',(req,res)=>{
  createPatient(req.body).then((response)=>
  res.json(response))
  
  })

 app.delete('/api/patient/delete/:_id',(req,res)=>{
  deletePatient(req.params._id).then((result)=>
  res.json(result))
  
  }) 




app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
