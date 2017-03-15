const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


app.listen(3000, function(){
	console.log("Listening on port 3000!");
});



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
	response.sendFile(path.join(__dirname, "index.html"))
});


app.get("/api/:pet?", function(request, response){
	let searchQuery = request.params.pet;
	pets.forEach(function(pet){
		if(pet.name === searchQuery){
			return response.json(pet);
		}else{
			console.log(searchQuery +" not found");
		}
	});
});

 