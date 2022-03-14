const { status } = require("express/lib/response");
const pool=require("../db/db");

 class LoginController{

    static async login(req ,res){
       
        try {
                const {emp_email,emp_mobile,password} = req.body;

                console.log(emp_email)
                console.log(emp_mobile)
                console.log(password)

         await pool.query('SELECT * FROM employees where emp_email=?,emp_mobile=?,password=?',
         [emp_email,emp_mobile,password],(err,results,fields) => {
                if (err) {
                    console.log(err);
                    res.status(404).send({
                        Message: " Employee not found",
                        stackTrace: err
                    });

                } else{
                    if (!results.length == 0) {
                        if (results[0].emp_email == emp_email && results[0].password == password || results[0].emp_mobile == emp_mobile && results[0].password == password) {

                            res.status(200).json({
                                "payload": [
                                    {
                                        "Message": "login Sucssesfully"
                                    }
                                ],
                                "errors": [],
                                "success": true
                            });
                        } else {
                            res.status(404).json({
                                Message: "Invalid crediential"
                            });
                        }

                    } else {
                        console.log(err)
                    }
                }

            })


        } catch (error) {
            
        }

    }

}

module.exports = LoginController;