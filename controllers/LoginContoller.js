const { status } = require("express/lib/response");
const pool = require("../db/db");

class LoginController {

    static async login(req, res) {

        try {

            const { empid, emp_name, emp_email, emp_mobile, emp_national_id,password } = req.body;
            const query1 = `SELECT * FROM employees WHERE emp_email='${emp_email}'`
            const find = await pool.query(query1);

            if (find.rowCount == 0) {

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
                const query = `SELECT * FROM employees where emp_email='${emp_email}' and password='${password}'`
                const find1 = await pool.query(query);

                res.status(200).json({
                    "payload": [
                        {
                            "Message": "login Sucssesful"
                        }
                    ],
                    "errors": [],
                    "success": false
                });
            }

        } catch (error) {
            console.log(error)
        }

    }

}

module.exports = LoginController;