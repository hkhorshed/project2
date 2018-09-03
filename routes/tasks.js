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

   
    
    db.subTask.create({mainTask: req.body.mainTask1, description: req.body.description1})

    db.task.create({mainTask: req.body.mainTask, description: req.body.description})

    
    
  });
module.exports = router;