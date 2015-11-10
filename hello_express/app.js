var express = require('express'),
  app = express();
  cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.get('/', function(req, res) {
  res.render('hello', {'name' : 'Swig'});
})

app.get('*', function(req, res) {
  res.status(404).send('404. page not found');
})

app.listen(8080);
console.log('express server started on port 8080');
