//Dependencies
var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var app = express();

//MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest_test', {
	useMongoClient: true
});

//schema
var studentSchema = mongoose.Schema({
	name: String,
	age: Number,
	yearJoined: Number,
	level: Number,
});

//Return model
var Student = app.resource = restful.model('student', studentSchema)
.methods(['get' ,'put','post','delete']);
module.exports = Student;
