const { send } = require("express/lib/response");
const pool = require("../db/db");


class RegisterController {
    static async register(req, res) {

        try {
            const { empid, emp_name, emp_email, emp_mobile, emp_national_id, password } = req.body;

            await pool.query('INSERT INTO employees (empid,emp_name, emp_email, emp_mobile, emp_national_id, password) VALUES ($1,$2,$3,$4,$5,$6)',
                [empid, emp_name, emp_email, emp_mobile, emp_national_id, password], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(400).send({
                            Message: err.sqlMessage
                        })
                    }
                    else {
                        res.status(200).json({
                            "payload": [
                                {
                                    "Message": "Employee Added"
                                }
                            ],
                            "errors": [


                            ],
                            "success": true

                        })
                    }
                    console.log("Employee Added")
                });
        }
        catch (e) {


        }
    }



}

module.exports = RegisterController;