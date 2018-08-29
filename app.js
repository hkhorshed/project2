let express = require('express');
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Sequelize = require('sequelize');
var connnection = new Sequelize('project2', 'projectwo', 'jurassicpark', {
    dialect: 'postgres'
});



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



//questoin i have: why use migrate(slide 15) when you can just add in the code in the app.js file?

// var Article = connection.define('article', {
//     title: Sequelize.STRING,
//     body: Sequelize.TEXT
// });

// connection.sync();