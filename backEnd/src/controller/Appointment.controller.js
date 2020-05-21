const {createAppointment,findAppointment} = require('../model/appointment.model');
const { sendEmail } = require('../utils/utils');

let setAppointment = (req)=>{
  return new Promise((resolve,reject)=>{
    createAppointment(req.body,(err,res)=>{
      if(err) reject();
      else {
        resolve(res);
        let form = Object.assign(req.body,{subject: 'New Appointment'});
        sendEmail(form,'newAppointment');
      }
    });
  })
}

let getAppointments = (req)=>{
  return new Promise((resolve,reject)=>{
    let data = findAppointment();
    if(data){
      resolve(data);
    }else{
      reject();
    }
  })
}

module.exports = {
  setAppointment:setAppointment,
  getAppointments:getAppointments
}