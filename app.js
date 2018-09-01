let express = require('express');
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log(msg);
    });
  });



app.set('view engine', 'ejs');
var Sequelize = require('sequelize');
let db = require('./models');


app.set('view engine', 'ejs');
// app.set('appData', data);

app.use(express.static('public'));

app.use(require('./routes/tasks'));
app.use(require('./routes/chat'));

app.use(require('./routes/login'));
app.use(require('./routes/register'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/logout'));

http.listen(9000, () =>{
    console.log('listening port 9000');
});



