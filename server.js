var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dado = require('./api/models/dataModel');
var routes = require('./api/routes/dataRoutes'); 
var port = process.env.PORT || 3000;
var dotenv = require('dotenv');

dotenv.config();
var dbURI = process.env.MONGOLAB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(dbURI, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
