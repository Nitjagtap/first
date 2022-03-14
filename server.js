const express = require('express');
const pool = require('./db/db');
const routes=require('./routes/index');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/",routes);


pool.connect(function(err){
	if(err) throw err;

	console.log("Connected with pg ...")
})


app.listen(PORT, () => {
	console.log(`This users app listening at : http://localhost:${PORT}`);
});