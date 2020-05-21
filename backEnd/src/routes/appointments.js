const routes = require('express').Router();
const {getAppointments,setAppointment} = require('../controller/Appointment.controller');

routes.post('/appointment', (req,res) =>{
  return setAppointment(req).then(result=>{
    console.log("res",result);
    res.statusCode = 200;
    res.send(result);
  }).catch(err=>{
    res.statusCode = 400;
    res.send()
  })
})

routes.get('/appointment',(req,res)=>{
  return getAppointments().then(result=>{
    res.statusCode = 200;
    res.send(result);
  }).catch(err=>{
    res.statusCode = 400;
    res.send()
  })
})

module.exports = routes