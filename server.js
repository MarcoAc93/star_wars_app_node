var express = require("express");
var app = express();
var routes = require('./routes');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.single_page);

app.get('*', routes.not_found);

app.listen(3000, function(){
	console.log('Aplicacion corriendo el puerto 3000');
});