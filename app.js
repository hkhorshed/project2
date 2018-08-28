let express = require('express');
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.set('view engine', 'ejs');
app.set('appData', data);

app.use(express.static('public'));






http.listen(9000, () =>{
    console.log('listening port 9000');
});