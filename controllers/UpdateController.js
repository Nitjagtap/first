const pool = require("../db/db");

class UpdateController {
    static async update(req, res) {

        try {

            const emp_email = req.params.emp_email

            const { empid, emp_name, emp_mobile, emp_national_id, password } = req.body

            const query = `update employees set empid='${empid}',emp_name='${emp_name}',
                                emp_mobile='${emp_mobile}',emp_national_id=${emp_national_id},
                                password='${password}' 
                                WHERE emp_email='${emp_email}'`

            const put = await pool.query(query)

            if (put.rowCount > 0) {

                res.status(200).json({
                    "payload": [
                        {
                            "Message": "Employee Updated"
                        }
                    ],
                    "errors": [],
                    "success": true
                });



            } else {

                res.status(400).json({
                    "payload": [
                        {
                            "Message": "Employee Not Found"
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

module.exports = UpdateController;