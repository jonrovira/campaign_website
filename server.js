
var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
	res.sendfile('index.html', {root: __dirname + '/dist'});
});

app.listen(process.env.PORT || 5000);