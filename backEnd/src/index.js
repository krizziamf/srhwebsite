'use strict'

require('dotenv').config()
const app = require('express')();
const basicAuth = require('express-basic-auth');
const cors = require('cors');
const {corsOption, authorizer} = require('./config/server.config');
const routes = require('./config/route.config');
const dbConfig = require('./config/database.config');
const bodyParser = require('body-parser');

app.use(cors(corsOption()));
app.use(basicAuth({
  authorizer: authorizer,
  challenge: process.env.BASIC // <--- needed to actually show the login dialog!
}));
app.use(bodyParser.json());
app.use(routes);
// app.use(dbConfig);

app.listen(process.env.PORT, ()=>{
  console.log( new Date(), `App has started at ${process.env.PORT}`);
})