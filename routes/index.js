const exp = require('constants');
const path = require('path');
var express = require('express');

var router = express.Router();

const message = {
    result: []
};

router.get('/index',( req, res , next)=>{    
    res.sendFile(path.join(__dirname,'../public','index.html'));    
});

router.post('/index/btn',( req, res , next)=>{    
    console.log(req.body);
    res.send(req.body);
    // res.send(req);    
});

router.get('/index/btn',( req, res , next)=>{    
    
    res.send(req.query);
    res.sendFile(path.join(__dirname,'../public','index.html'),req.query)
    // res.send(req);    
});


module.exports = router;


