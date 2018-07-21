var express=require('express');
var bodyParser=require("body-parser");
var app=express();


var taskRouter=express.Router()

app.get('/',function(req,res){
	
	alert("I am an alert box!");
});

app.listen(8082) 
