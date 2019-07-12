// 1) We collect data using the ORM
// 2) Send it into burger.js
// 3) Use burger.js to send the data to the front-end

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var app = express();