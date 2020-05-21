const mongoose = require('mongoose');
const date = new Date();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(db=>{
  console.log(date, 'Database is Connected');
},err=>{
  console.error(date, 'Database Connection Error');
  console.error(date, err);
})
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('database connected'))

// module.exports = mongoose

const doctorsModel = require('../model/doctors.model').doctorsCollection(); 
const appointmentModel = require('../model/appointment.model').createAppointmentsCollection();