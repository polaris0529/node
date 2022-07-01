var express = require('express');
const path = require('node:path'); //current path;
var app = express();

var indexRouter = require('./routes/index');
var userRotuer  = require('./routes/users');


app.use(express.static(path.join(__dirname + "/public")));
app.use('/bootstrap',express.static(path.join(__dirname+'/node_modules/bootstrap/dist'))); // redirect bootstartp

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));   // json parsing 후에 router 지정;;;

app.use('/',indexRouter);
app.use('/user',userRotuer);



app.use(( error , req ,res ,next ) => {

  console.log("will mpt print")
  res.json({ 'messsage' : error.messsage });
})


// app.use(( res , req ) =>{
//     res.status(404.).render('error.html', { error : '' });
// })

// app.set('view enigne', 'ejs'); ejs ? 
// use메서드는 모든 HTTP 메서드에 대해 요청 주소만 일치하면 실행되지만 get, post, put, patch, delete 같은 메서드는 주소뿐만 아니라 HTTP 메서드까지 일치 하는 요청일 때만 실행된다. 
// 출처: https://backback.tistory.com/341 [Back Ground:티스토리]

var port = app.listen(process.env.PORT || 5050);

//REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분입니다.
//app.get이라고 작성했기 때문에 get 요청으로 정의가 되고
//app.post로 작성할 경우 post 요청으로 정의가 됩니다.
//REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다

app.listen( port , () => { 
  console.log('start! express server');
})