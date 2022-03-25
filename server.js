const express = require('express');
const pool = require('./db/db');
const EmployeeNotFound = require('./Helpers/error');
const routes = require('./routes/index');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", routes);
app.use("*",(req , res, next)=>{
	const err = new EmployeeNotFound(`Requested URL '${req.path}' Not Found!`,404);
	
	next(err)
})

app.use((err,req ,res ,next)=>{
	const statusCode = err.statusCode || 500;
	res.status(statusCode).json({
		sucsses : 0 ,
		message : err.message , 
		stack : err.stack
	})
})

pool.connect(function (err) {
	if (err) throw err;

	console.log("Connected with pg ...")
})


app.listen(PORT, () => {
	console.log(`This users app listening at : http://localhost:${PORT}`);
});