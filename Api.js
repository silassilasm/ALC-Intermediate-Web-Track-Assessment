//Dependencies
var express = require('express');
var router = express.Router();
var app = express();

//models
var Student = require('../models/student')

// Routes
router.get('/', function(req, res){
	res.send('api is working');
});

// Routes
Student.register(router, '/students');

//Return router
module.exports = router;  
