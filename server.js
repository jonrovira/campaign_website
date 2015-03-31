
var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(path.join(__dirname + '/dist')));
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(process.env.PORT || 5000);