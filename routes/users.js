var express = require('express');
var router = express.Router();
var path = require('path');

//user
router.get('/',( req, res , next)=>{
    res.render('index')
})

router.get('/login',( req, res , next)=>{
    // res.sendFile(path('login.html'))
    res.sendFile(path.join(__dirname,'../public','login.html'));
})

router.post('/login.do',( req, res , next)=>{
    
    res.sendFile(path.join(__dirname,'../public','login.html'));

})

router.get('/engine',( req, res , next)=>{


    
    res.render('engine', {
         title : 'engnine',
         length : 5
        });

})



router.use('/*',( req ,res , next) =>{ //wildCard 경유 루트
    // res.sendFile(path.join(__dirname,'../public','index.html'));
    res.redirect('/index');
})
module.exports = router;