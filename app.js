const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const loginRoute=require('./routes/login')
const sendRoute=require('./routes/sendMessage')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginRoute)
app.use(sendRoute)
app.listen(3000);
