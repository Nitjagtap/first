const { send } = require("express/lib/response");
const pool = require("../db/db");


class RegisterController {
    static async register(req, res) {

        try {
            let { empid, emp_name, emp_email, emp_mobile, emp_national_id, password } = req.body;

            if(password.length > 8 && password !=null) {

                const query1 =`SELECT * FROM employees WHERE emp_email='${emp_email}'`
                const find = await pool.query(query1)
                console.log(find)

                if (find.rowCount>0) {
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
                    const find1 = await pool.query(query)
            console.log(find1)       

                        res.status(200).json({
                            "payload": [
                                {
                                    "Message": "Employee Added"
                                }
                            ],
                            "errors": [],
                            "success": true

                        })
                    
                    console.log("Employee Added")
                }
            } else {
                console.log("password is incorrect")
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


        }
    }



}

module.exports = RegisterController;