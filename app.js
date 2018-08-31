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

//Test for tables
// db.user.create({name:'Travis', userName:'moto', email:'me@me.com'})
// db.user.create({name:'Hussein', userName:'dfdto', email:'me@me.com'})
// db.user.create({name:'Eric', userName:'motdfad', email:'me@me.com'})
// db.project.create({projectName:'p1', teamLead:'Travis'})


db.user.findAll({
    include: [{
    model: db.project,
    required: true
    }]
}).then(function(results){
        results.forEach(function(record){
            console.log(record.userName, record.project.projectName)
        })
    })


// db.project.findAll()
//     .then(function(results){
//         results.forEach(function(record){
//             console.log(record.projectName)
//         })
//     })
http.listen(9000, () =>{
    console.log('listening port 9000');
});



