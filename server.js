var express = require('express')
var cors = require('cors'),

  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/bookModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Bookdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 



var routes = require('./api/routes/bookRoutes'); //importing route
routes(app);  //register the route


app.listen(port);


console.log('bibliothekmanager RESTful API server started on: ' + port);
