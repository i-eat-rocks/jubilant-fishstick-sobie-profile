const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true})); 

// console.log(__dirname);

// Endpoints //
app.get('/', function (req, res) {
  res.sendFile("index.html");

})

app.get('/ejs-test', function (req, res) {
  res.render("front.ejs", {pageTitle: "PAGE TITLE"}); // Thanks Quan
  
})

app.post('/testMyName', function (req, res) {
  console.log(req.body.yaName);
  console.log("ding");
  res.render('front.ejs', {pageTitle:"Hello, " + req.body.yaName});  
})

app.get('/GETName', function (req, res) {
  res.render("front.ejs", {pageTitle: "Hello, " + req.query.yaName});

})

app.listen(PORT, ()=> console.log(`server is running on ... ${PORT}`));