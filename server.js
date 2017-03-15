const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));





var pets = [
{
	name: "Falcor",
	color: "white",
	age: 10
},
{
	name: "Tux",
	color: "Black & white",
	age: 3
},
{
	name: "Bear",
	color: "Black & white",
	age: 3
}];












app.get("/", function(request, response){
	response.sendFile(path.join(__dirname, "index.html"));
});


app.get("/all", function(request, response){
	response.sendFile(path.join(__dirname, "all.html"));
});

app.get("/api/:pet?", function(request, response){
	let searchQuery = request.params.pet;
	
	if(searchQuery){
		for (var i = 0; i < pets.length; i++){
			if(searchQuery ===pets[i].name){
				return response.json(pets[i]);

			}
		}
		return response.json(false);	
		
		
	}
		return response.json(pets);	
});

app.get("/add", function(request, response){
	response.sendFile(path.join(__dirname, "add.html"));
});


app.post("/api/new", function(req, res){
	newPet = req.body;
	console.log(newPet);
	pets.push(newPet);
	res.json(newPet);

});


app.listen(3002, function(){
	console.log("Listening on port 3002!");
});

 