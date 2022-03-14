const pool = require("../db/db");

class DeleteController{
    static async delete(req, res) {

        try {

            const query = `DELETE FROM EMPLOYEES WHERE emp_email='${req.body.emp_email}'`

            const del = await pool.query(query);

            console.log(query)
            //res.send(del)

            if (del.rowCount>0) {

                res.status(400).json({
                    "payload": [
                        {
                            "Message": "Employee Not Found"
                        }
                    ],
                    "errors": [],
                    "success": false
                });

            } else {

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

        } catch (error) {
            console.log(error)
        }


    }
}

module.exports = DeleteController;