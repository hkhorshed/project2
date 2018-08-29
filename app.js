let express = require('express');
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/tasks'));





http.listen(9000, () =>{
    console.log('listening port 9000');
});