const pool = require("../db/db");
const logger = require('../Helpers/logger');
const jwt = require('jsonwebtoken');


class DeleteController {
    static async delete(req, res) {

        try {
            const { emp_email } = req.body;
            const query1 = `SELECT * FROM employees WHERE emp_email='${emp_email}'`
            const find = await pool.query(query1);

            if (find.rowCount == 0) {

                logger.employeelogger.log('error', 'Employee does not exist try with another email id')

                res.status(409).json({
                    "payload": [
                        {
                            "Message": "Employee does not exist try with another email id"
                        }
                    ],
                    "errors": [],
                    "success": false
                })

            }
            else {

                let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
                let jwtSecretKey = process.env.JWT_SECRET_KEY;

                    const token = req.header(tokenHeaderKey);

                    const verified = jwt.verify(token, jwtSecretKey);
                    if (verified) {
                        const query = `DELETE FROM EMPLOYEES WHERE emp_email='${emp_email}'`

                        await pool.query(query);
    
                        logger.employeelogger.log('info', 'Employee deleted')
    
                        res.status(200).json({
                            "payload": [
                                {
                                    "Message": "Employee deleted"
                                }
                            ],
                            "errors": [],
                            "success": true
                        });
    
                    }             

                }

        } catch (error) {
                console.log(error)
                logger.employeelogger.log('error', 'Error Occurred')

            }

        }
}

module.exports = DeleteController;