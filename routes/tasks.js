var express = require('express');
var router = express.Router();


router.get('/tasks', function(req, res){
    
    res.render('tasks', {
    })
})

module.exports = router;