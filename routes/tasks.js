let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/tasks', function(req, res){
    
    res.render('tasks', {
    })
})
router.post('/tasks', (req,res) => {

   
    

    db.project.create({projectName: req.body.f1name})
    .then(() => {
        // success;
        res.redirect('/login');
    })
    .catch(error => {
        // error;
    });
  
    //save to database
    
    
  });
module.exports = router;