const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
// console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile("index.html");

})

app.get('/nodemon', function (req, res) {
  res.send("<h1>DEEZ</h1><br><a href='/'>go back</a>");
  
})

app.get('/ejs', function (req, res) {
  res.render("front.ejs", {pageTitle: "PAGE TITLE"}); // Why doesn't this change the page title
  
})

app.listen(PORT, ()=> console.log(`server is running on ... ${PORT}`));