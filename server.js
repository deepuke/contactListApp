var express = require('express');
var app = express();

var mongojs = require("mongojs");
var db = mongojs('candidatedb', ['candidates']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/candidatedb', function(req, res){
	console.log("I received a GET request.");	
	db.candidates.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/candidatedb', function(req, res){
	console.log(req.body);
	db.candidates.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/candidatedb/:id', function(req, res){
	var id= req.params.id;
	console.log(id);
	db.candidates.remove({_id : mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.get('/candidatedb/:id', function(req, res){
	var id= req.params.id;
	console.log(id);
	db.candidates.findOne({_id : mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/candidatedb/:id', function(req, res){
	var id= req.params.id;
	console.log(id);
	db.candidates.findAndModify({
			query : {_id : mongojs.ObjectId(id)
		},
		update : {
			$set : {
				name : req.body.name,
				email : req.body.email,
				number : req.body.number
			}
		},
		new : true
	}, function(err, doc){
		res.json(doc);
	});
});

app.listen("3000");

console.log("server is up and running at port :3000");

