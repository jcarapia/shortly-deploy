var app = require('./server-config.js');

var port = 8080;

app.listen(process.env.PORT || 8080);

//console.log('Server now listening on port ' + port);
