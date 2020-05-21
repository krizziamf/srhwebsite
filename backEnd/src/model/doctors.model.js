const mongoose = require('mongoose');

let doctorSchema = new mongoose.Schema({
  id:Number,
  doctorName:String
});
let Doctors = mongoose.model('Doctors', doctorSchema);

let doctorsCollection=()=>{
  Doctors.createCollection().then(res=>{
    console.log(new Date(),'Collection Doctors Created');
  }, err =>{
    throw err;
  });
}

module.exports = {
  doctorsCollection:doctorsCollection
}