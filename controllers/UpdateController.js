const pool = require("../db/db");

class UpdateController {
    static async update(req, res) {

        try {

            let emp_email = req.body.emp_email

            let { empid, emp_name, emp_mobile, emp_national_id, password } = req.body

            const find = await pool.query(`select * from employees where emp_email='${emp_email}'`)
            console.log(find)

            if (find.rowCount == 0) {
                throw error
            } else {

                if (empid == undefined || empid == "" || empid == null) {
                    empid = find.rows[0].empid;
                }
                if (emp_name == undefined || emp_name == "" || emp_name == null) {
                    emp_name = find.rows[0].emp_name;
                }
                if (emp_mobile == undefined || emp_mobile == "" || emp_mobile == null) {
                    emp_mobile = find.rows[0].emp_mobile;
                }
                if (emp_national_id == undefined || emp_national_id == "" || emp_national_id == null) {
                    emp_national_id = find.rows[0].emp_national_id;
                }
                if (password == undefined || password == "" || password == null) {
                    password = find.rows[0].password;
                }

                const query1 = `update employees set empid='${empid}',emp_name='${emp_name}', emp_mobile='${emp_mobile}',
                                emp_national_id='${emp_national_id}',password='${password}' 
                                  WHERE emp_email='${emp_email}'`

                const put = await pool.query(query1)
                console.log(query1)
                console.log(put)

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

                    res.status(404).json({
                        "payload": [
                            {
                                "Message": "Employee Not Found"
                            }
                        ],
                        "errors": [],
                        "success": false
                    });
                }
            }

        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = UpdateController; 