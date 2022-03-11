const { send } = require("express/lib/response");
const pool = require("../db/db");


class Controller{
    static async controller(req,res){
    
        try{
            const {empid,emp_name,emp_email,emp_mobile,emp_national_id,password} = req.body;
            
           await pool.query('INSERT INTO employees (empid,emp_name, emp_email, emp_mobile, emp_national_id, password) VALUES ($1,$2,$3,$4,$5,$6)',
            [empid,emp_name, emp_email, emp_mobile, emp_national_id, password],(err,result)=>{
                if (err) throw err;
            
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
                console.log("Employee Added")
        });
        }
        catch(e){


        }
    }

    static async controller1(req,res){
        try{
            pool.query("select * from employees",(err,results)=>{
                if (err) throw err;
                res.status(200).json(results.rows);
                console.log("record display")
        });
        }catch(e){

        }
    }

}

module.exports = Controller;