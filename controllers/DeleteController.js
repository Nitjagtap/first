const pool = require("../db/db");

class DeleteController {
    static async delete(req, res) {

        try {
            const {empid,emp_name,emp_email,emp_mobile,emp_national_id,password}=req.body;
            const query1 = `SELECT * FROM employees WHERE emp_email='${emp_email}'`
            const find = await pool.query(query1);

            if(find.rowCount == 0){
        
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
            else{

                const query = `DELETE FROM EMPLOYEES WHERE emp_email='${req.body.emp_email}'`

                const del = await pool.query(query);

                console.log(query)

                    if (del.rowCount > 0) {

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
        }


    }
}

module.exports = DeleteController;