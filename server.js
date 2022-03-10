const express = require('express');
const routes=require('./routes/index');
const app = express();

app.use(express.json());

app.use("/",routes);

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`This users app listening at : http://localhost:${PORT}`);
});