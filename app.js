var express = require('express');
const path = require('node:path');

var app = express();

var indexRouter = require('./routes/index');
var userRotuer  = require('./routes/users');

app.set
app.use('/',indexRouter);
app.use('/users',userRotuer);
app.set('view enigne', 'ejs');


var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
  app.use(express.static(path.join(__dirname, 'public'),options));
  console.log(path.join(__dirname, 'public'));


// use메서드는 모든 HTTP 메서드에 대해 요청 주소만 일치하면 실행되지만 get, post, put, patch, delete 같은 메서드는 주소뿐만 아니라 HTTP 메서드까지 일치 하는 요청일 때만 실행된다. 
// 출처: https://backback.tistory.com/341 [Back Ground:티스토리]

var port = app.listen(process.env.PORT || 5050);



//REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분입니다.
//app.get이라고 작성했기 때문에 get 요청으로 정의가 되고
//app.post로 작성할 경우 post 요청으로 정의가 됩니다.
//REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, function() {
    console.log('start! express server');
})