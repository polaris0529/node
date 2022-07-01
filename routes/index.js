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
    
    res.body = { title : 'btn'}
    res.send(req.body);
    // res.send(req);    
});

router.get('/index/btn',( req, res , next)=>{        
    res.send(req.query);
    res.sendFile(path.join(__dirname,'../public','index.html'),req.query)
    // res.send(req);    
});

router.get('/index/dynamic',( req, res , next)=>{        
    
    // var list = '';

    // for( var i = 0; i < 5; i++){

    //     list.push('<li></li>')

    // }

    var output = `
    // <!DOCTYPE html>
    // <html>
    //     <head>
    //         <meta charset="utf-8">
    //         <title></title>
    //     </head>
    //     <body>
    //         Hello, Static!
    //         <ul></ul>
    //     </body>        
    // </html>
    // `;

    // res.status(200);
    // res.body({ title : 2000});
    res.sendFile(path.join(__dirname,'../public','render.html'));

    //res.sendFile(path.join(__dirname,'../public','render.html'));
});


module.exports = router;


