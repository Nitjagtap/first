const { createLogger, format, transports, info } = require('winston');
//const { login } = require('../controllers/LoginContoller');

 const employeelogger = createLogger({
     transports:[
         new transports.File({
             filename: 'Helpers/employee.sucsses.log',
             level : 'info',
             format : format.combine(format.timestamp(),format.json())

         }),
         new transports.File({
             filename:'Helpers/employee.error.log',
             level :'error',
             format : format.combine(format.timestamp(),format.json())

         })
     ]
 })

 module.exports = {employeelogger}