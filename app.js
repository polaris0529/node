var express = require('express');
const path = require('node:path'); //current path;
var app = express();
var expressSession = require('express-session');
const ejs = require('ejs');
const mysql = require('mysql');

const cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

app.use(
  expressSession({
    secret: "my key",
    resave: true,
    saveUninitialized: true,
  })
);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(cookieParser());

app.use(express.static(path.join(__dirname + "/public")));
app.use('/bootstrap',express.static(path.join(__dirname+'/node_modules/bootstrap/dist'))); // redirect bootstartp

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));   // json parsing 후에 router 지정;;;


//app.use('/',(req,res)=> {  res.send('index'); }) // default
app.use('/index',indexRouter);ap




const server = app.listen(5050 , () => {
  console.log('start Server : localhost : 5050')
})