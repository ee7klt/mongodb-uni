var express = require('express'),
  app = express();

app.get('/', function(req, res) {
  res.send('Hello, World!');
})

app.get('*', function(req, res) {
  res.status(404).send('404. page not found');
})

app.listen(8080);
console.log('express server started on port 8080');
