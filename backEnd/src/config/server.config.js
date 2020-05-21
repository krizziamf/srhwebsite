require('dotenv').config()
const basicAuth = require('express-basic-auth');

var corsOption = ()=>{
  let option = {}
  switch (process.env.NODE_ENV) {
    case 'development':
      option = {
        origin: ['http://localhost:5000', 'http://localhost:3000'],
        allowedHeaders:"Content-Type,Authorization,Accept",
        credentials:true
      }
      break;
    case '':
      break;
    default:
       console.error('Invalid Environment');
      break;
  }

  return option;
}

var authorizer = (username, password)=>{
  const userMatches = basicAuth.safeCompare(username, process.env.UNAME)
  const passwordMatches = basicAuth.safeCompare(password, process.env.PASSWORD)

  return userMatches & passwordMatches
}

module.exports ={
  corsOption:corsOption,
  authorizer:authorizer
}