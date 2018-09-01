let express = require('express');
let router = express.Router();

router.get('/dashboard',function(req,res){
  
    if(!req.isAuthenticated()) {
        res.redirect('/login');
      return
    }
  
    res.render('dashboard', {
      pageTitle: 'Dashboard'
    })
  });



  
module.exports = router;