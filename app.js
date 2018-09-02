let express = require('express');
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Sequelize = require('sequelize');
let db = require('./models');
var path = require('path');



app.set('view engine', 'ejs');
// app.set('appData', data);

app.use(express.static('public'));
app.use(express.static(__dirname + '/public/'));


// app.use(require('./routes/tasks'));

app.use(require('./routes/login'));
app.use(require('./routes/register'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/logout'));

http.listen(9000, () => {
    console.log('listening port 9000');
});



