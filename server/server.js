const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
	res.send("Hello from Server")
})

app.post('/subscribe', function(req, res){
	res.send(req.body);
	res.status(200).send({"message": "Data Received"});
})

app.listen(PORT, function(){
	console.log("Server is running on localhost:" + PORT);
})