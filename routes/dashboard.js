let express = require('express');
let router = express.Router();

router.get('/dashboard',function(req,res){
  

    res.render('dashboard', {
        pageTitle: 'Projects'
    })
  })



  
module.exports = router;



  
