//using a server isntead of static files so that we may deploy testing through server directly on start up. could also be done with grunt. this is quick fix in before deployment process.

var express     = require('express');
var morgan = require('morgan');
var app = express();

//allows for deployment with || statement

var port = process.env.PORT || 8000;

app.use(morgan('dev'));


app.use('/', express.static(__dirname + '/client'));


app.listen(port);

console.log('Server is listening in port', port)
