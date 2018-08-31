let express = require('express');
let router = express.Router();

router.get('/dashboard',function(req,res){
  
    if(!req.isAuthenticated()) {
        res.redirect('/login');
      return
    }
  
    res.send("You are logged in!")
  })



  
module.exports = router;