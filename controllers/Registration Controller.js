class Controller{
    static async controller(req,res){
        try{
            pool.query("insert into Employees",(err,Message)=>{
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
        });
        }
        catch(e){

        }
    }

}

module.exports = Controller;