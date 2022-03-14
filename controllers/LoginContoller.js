const { status } = require("express/lib/response");
const pool = require("../db/db");

class LoginController {

    static async login(req, res) {

        try {

            const { emp_email, password } = req.body;


            const query1 = `SELECT * FROM employees where emp_email='${emp_email}' and password='${password}'`
            const find = await pool.query(query1);

            if (find.rowCount > 0) {
                res.status(200).json({
                    "payload": [
                        {
                            "Message": "login Sucssesfully"
                        }
                    ],
                    "errors": [],
                    "success": true
                });
            }
            else {

                res.status(403).json({
                    "payload": [
                        {
                            "Message": "login UnSucssesful"
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