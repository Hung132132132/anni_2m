const express = require("express");
const nodemailer = require("nodemailer");
var path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

app.get("/", function(request, response){
    response.render("Home");
});

app.post("/submit",function(req,res){
    console.log(req.body.answer);
    res.render("Result",{correctNumber: req.body.answer});
});