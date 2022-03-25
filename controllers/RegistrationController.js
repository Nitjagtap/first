const { send } = require("express/lib/response");
const logger = require('../Helpers/logger')
const pool = require("../db/db");


class RegisterController {
    static async register(req, res) {

        try {
            let { empid, emp_name, emp_email, emp_mobile, emp_national_id, password } = req.body;

            if(password.length > 8 && password !=null) {

                const query1 =`SELECT * FROM employees WHERE emp_email='${emp_email}'`
                const find = await pool.query(query1)
                
                if (find.rowCount>0) {

                    logger.employeelogger.log('error','email_id already registered plz try with different email_id')

                    res.status(409).json({
                        "payload": [
                            {
                                "Message": "email_id already registered plz try with different email_id"
                            }
                        ],
                        "errors": [], 
                        "success": false
                    })


                } else {
                    const query = `INSERT INTO employees VALUES ('${empid}','${emp_name}','${emp_email}','${emp_mobile}','${emp_national_id}','${password}')`
                     await pool.query(query)

                     logger.employeelogger.log('info','Employee Added Sucssesful')

                        res.status(200).json({
                            "payload": [
                                {
                                    "Message": "Employee Added"
                                }
                            ],
                            "errors": [],
                            "success": true

                        })
                    

                }
            } else {

                logger.employeelogger.log('error','Password Invalid')
                
                res.status(403).json({
                    "payload": [
                        {
                            "Message": "password is invalid"
                        }
                    ],
                    "errors": [],
                    "success": false
                });
            }
            
                
        }
        catch (e) {
            logger.employeelogger.log('error','Error Occurred While Register')


        }
    }



}

module.exports = RegisterController;