const mongoose = require('mongoose');
const date = new Date();
const stringRequired = {
  type:String,
  required:true
};
let appointmentSchema = new mongoose.Schema({
  firstname: stringRequired,
  lastname: stringRequired,
  middlename: stringRequired,
  age: stringRequired,
  birthday: stringRequired,
  gender: stringRequired,
  address: stringRequired,
  email: stringRequired,
  contact: stringRequired,
  appointment: stringRequired,
  doctor: stringRequired,
  complaint: stringRequired,
  patient: stringRequired,
  preferredDate: stringRequired,
  preferredTime: stringRequired,
  payment: stringRequired
})
let Appointments = mongoose.model('Appointments', appointmentSchema);

let createAppointmentsCollection = ()=>{
  Appointments.createCollection().then(res=>{
    console.log(date,'Collection Appointment Created');
  }, err =>{
    throw err;
  });
}

let createAppointment = (payload,cb)=>{
  return Appointments.create(payload,(err, docs)=>{
    if(err){
      console.error(err);
      return cb(err);
    }else{
      return cb(null, docs._id);
    }
  });
}

let findAppointment = () =>{
  return Appointments.find({},(err, docs)=>{
    if(err){
      console.error(err);
      return;
    }else{
      return docs;
    }
  })
}

module.exports = {
  createAppointmentsCollection : createAppointmentsCollection,
  createAppointment:createAppointment,
  findAppointment:findAppointment
}