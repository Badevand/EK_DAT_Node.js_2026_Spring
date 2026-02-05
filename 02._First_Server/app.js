// import express
const express = require('express');
// instantiate express
const app = express();


// one-liner version:
// const app = require('express')();


app.get('/', (req, res) => {
    res.send({ data: "Welcome to the first server!" });
});




app.listen(8080);
