var express = require("express");
var app = express();
var mongoose = require("mongoose");
var	bodyParser = require("body-parser");
var	methodOverride  = require("method-override")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// mongoose.connect("mongodb+srv://Lisa:****@cluster0-ulpnb.mongodb.net/test?retryWrites=true&w=majority", {
// 	useNewUrlParser: true,
// 	useCreateIndex: true
// }).then(() => {
// 	console.log("Connected to DB!");
// }).catch(err => {
// 	console.log("Error: ", err.message);
// });

app.get("/", function(req, res) {
	res.render("landing.ejs");
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Innerve 2020 server has started!");
});
