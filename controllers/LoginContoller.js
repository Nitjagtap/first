const { status } = require("express/lib/response");
const jwtToken = require('jsonwebtoken');
const logger = require('../Helpers/logger')
const pool = require("../db/db");
//const {EmployeeNotFound }= require("../Helpers/error");


class LoginController {

    static async login(req, res,next) {

        try {

            const { empid, emp_name, emp_email, emp_mobile, emp_national_id,password } = req.body;
            const query1 = `SELECT * FROM employees WHERE emp_email='${emp_email}'`
            const find = await pool.query(query1);

            if (find.rowCount == 0) {

                logger.employeelogger.log('error','Employee does not exist try with another email id')

               // throw  new EmployeeNotFound("mployee does not exist try with another email id",409);

                // res.status(409).json({
                //     "payload": [
                //         {
                //             "Message": "Employee does not exist try with another email id"
                //         }
                //     ],
                //     "errors": [],
                //     "success": false
                // })

            }
            else {
                
                const query = `SELECT * FROM employees where emp_email='${emp_email}' and password='${password}'`
                
                await pool.query(query);
                
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                const data = {
                            emp_email,password
                        };

                logger.employeelogger.log('info','login Sucssesful')         

                res.status(200).json({
                    "payload": [
                        {
                            "Message": "login Sucssesful",
                            "token" : jwtToken.sign(data,jwtSecretKey)
                        }
                    ],
                    "errors": [],
                    "success": true
                });
        }

        } catch (error) {
            next(error)
            logger.employeelogger.log('error','error Occurred while login')
        }

    }

}

module.exports = LoginController;