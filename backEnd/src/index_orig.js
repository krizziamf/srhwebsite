const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/form', (req, res) => {
    const output = `
        <p>Appointment</p>
        <h1>Client's Information</h1>
        <ul>
            <li>Firstname: ${req.body.firstname}</li>
            <li>Lastname: ${req.body.lastname}</li>
            <li>Middlename: ${req.body.middlename}</li>
            <li>Age: ${req.body.age}</li>
            <li>Birthday: ${req.body.birthday}</li>
            <li>Gender: ${req.body.gender}</li>
            <li>Address: ${req.body.address}</li>
            <li>Email: ${req.body.email}</li>
            <li>Contact Number: ${req.body.contact}</li>
        </ul>
        <h1>Appointment Information</h1>
        <ul>
            <li>Type of Appointment: ${req.body.appointment}</li>
            <li>Name of Doctor: ${req.body.doctor}</li>
            <li>Complaint: ${req.body.complaint}</li>
            <li>Type of Patient: ${req.body.patient}</li>
            <li>Preferred Date: ${req.body.preferredDate} </li>
            <li>Preferred Time: ${req.body.preferredTime}</li>
            <li>Mode of Payment: ${req.body.payment}</li>
        </ul>
    `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'srh.website30@gmail.com', // generated ethereal user
            pass: 'srh123456' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Sto. Rosario Hospital" <srh.website30@gmail.com>', // sender address
        to: "srhonlinemds@gmail.com", // list of receivers
        subject: "New Appointment", // Subject line
        // text: "Hello world?", // plain text body
        html: output // html body
    });


    res.send("Thank you! Your request has been sent.");
})

const PORT = process.env.PORT || 5000;


//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('srhwebsite/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../srhwebsite/build', 'index.html'));
    })
}


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
});