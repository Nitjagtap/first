const jwt = require('jsonwebtoken');
const pool = require('../db/db');

class Allemployee{

static async allemployee(req, res){   

    const token = req.headers.authorization;  
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error! Token was not provided."});
    }
    //Decoding the token
    const decodedToken = jwt.verify(token,"secretkeyappearshere" );
    if (decodedToken) {
        const query = `SELECT * FROM employees ` ;
                  
             const data = await pool.query(query);
                
                logger.employeelogger.log('info','login Sucssesful')         

                res.status(200).json({
                    "payload": [   
                        {
                            "Result": data
                            
                        }
                    ],
                    "errors": [],
                    "success": true
                });
    }
     
}
    }

    module.exports = Allemployee;