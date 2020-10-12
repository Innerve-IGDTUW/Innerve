var express = require("express");
var app = express();
var mongoose = require("mongoose");
var	bodyParser = require("body-parser");
var	methodOverride  = require("method-override")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

const Client = require('./models/client');
const rootRoutes = require('./routes/root');
const clientRoutes = require('./routes/client');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const path  = require('path');


app.use(bodyParser());

const url ="mongodb+srv://dbUser:dbUser@cluster0.3t8dw.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(function (conn) {
  console.log("Plan Db connected");
}).catch(function (err) {
  console.log(err);
})

//const ut = mongoose.model('ut', { Name: String,email:String,password:String});


app.get("/", function(req, res) {
	res.render("landing.ejs");
});

app.get("/events", function(req, res) {
	res.render("events/events.ejs");
});

app.get("/events", function(req, res) {
	res.render("events/events.ejs");
});

app.get("/events/cse-it", function(req, res) {
	res.render("events/cse-it.ejs");
});

app.get("/events/ece", function(req, res) {
	res.render("events/ece.ejs");
});

app.get("/events/informal", function(req, res) {
	res.render("events/informal.ejs");
});

app.get("/events/mae", function(req, res) {
	res.render("events/mae.ejs");
});

app.get("/register", function(req, res) {
	res.render("register.ejs");
});

app.get("/gallery", function(req, res) {
	res.render("gallery.ejs");
});

app.get("/sponsors", function(req, res) {
	res.render("sponsors.ejs");
});

app.get("/schedule", function(req, res) {
	res.render("schedule.ejs");
});

app.get("/social-campaign", function(req, res) {
	res.render("social-campaign.ejs");
});

app.get("/meet-the-team", function(req, res) {
	res.render("meetourteam.ejs");
});
app.use('/', rootRoutes);
app.use('/client', clientRoutes);
app.listen(process.env.PORT || 3000, function() {
	console.log("Innerve 2020 server has started!");
});
