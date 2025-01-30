const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

// MongoDB setup //
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
run().catch(console.dir);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true})); 


// Endpoints //
app.get('/', function (req, res) {
  res.sendFile("index.html");

});

app.get('/ejs-test', function (req, res) {
  res.render("front.ejs", {pageTitle: "PAGE TITLE"}); // Thanks Quan
  
});

app.post('/testMyName', function (req, res) {
  console.log(req.body.yaName);
  console.log("ding");
  res.render('front.ejs', {pageTitle:"Hello, " + req.body.yaName});  
});

app.get('/GETName', function (req, res) {
  res.render("front.ejs", {pageTitle: "Hello, " + req.query.yaName});

});

app.listen(PORT, ()=> console.log(`server is running on ... ${PORT}`));