const emailConfig = require('../config/email.config');
let sendEmail = async (form,type)=>{
  let output = '';
  console.log(form);
  console.log(type);
  // console.log(emailBodyHtmlToString());
  switch(type){
    case 'newAppointment':
      output = await emailBodyHtmlToString(form,'/email_template/appointment.html')
                .replace('##firstname##', form.firstname)
                .replace('##lastname##', form.lastname)
                .replace('##middlename##', form.middlename)
                .replace('##age##', form.age)
                .replace('##birthday##', form.birthday)
                .replace('##gender##', form.gender)
                .replace('##address##', form.address)
                .replace('##email##', form.email)
                .replace('##contact##', form.contact)
                .replace('##appointment##', form.appointment)
                .replace('##doctor##', form.doctor)
                .replace('##complaint##', form.complaint)
                .replace('##patient##', form.patient)
                .replace('##preferredDate##', form.preferredDate)
                .replace('##preferredTime##', form.preferredTime)
                .replace('##payment##', form.payment);
    break;
  }
  let transporter = emailConfig;
  transporter.sendMail({
    from: '"Sto. Rosario Hospital" <srh.website30@gmail.com>', // sender address
    to: form.email, // list of receivers
    subject: form.subject, // Subject line
    // text: "Hello world?", // plain text body
    html: output // html body
  }, (err, info)=>{
    if(err) throw err;
    console.log(new Date(), JSON.stringify(info));
  });
}

function emailBodyHtmlToString(details,path){
  let htmlBody = require('path').join(__dirname, path);
  return require('fs').readFileSync(htmlBody,'utf8');
} 

module.exports = {
  sendEmail:sendEmail
}