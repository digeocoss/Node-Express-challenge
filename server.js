var express = require('express');
var path = require('path');
var app = new express();
var port = 3000;


app.get("/", (req, res) => {
    res.status(401).sendFile(path.join(__dirname + '/component/error.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/home.html'));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + '/component/contact.html'));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + '/component/about.html'));
})
