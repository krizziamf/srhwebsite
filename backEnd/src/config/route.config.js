let expressRoute = require('express').Router();
let routesPath = require('path').join(__dirname,'../routes');
require('fs').readdirSync(routesPath).forEach((file)=>{
  expressRoute.use('/', require(routesPath+'/'+file));
})
module.exports = expressRoute;

