let express = require('express');
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Sequelize = require('sequelize');
let db = require('./models');



app.set('view engine', 'ejs');
// app.set('appData', data);

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.render('home', {
        pageTitle: 'Home'
    })
});




http.listen(9000, () =>{
    console.log('listening port 9000');
});



