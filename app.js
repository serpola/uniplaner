/*var express = require('express');
var mongo = require('mongodb');

const host = '127.0.0.1';

var app = express()

app.use(express.static('static'));
app.use(express.json());

const url = 'mongodb://${host}:27017/mydb';
let db
mongo.MongoClient.connect(url)
    .then(function (conn) {
        return conn.collection();
    })
    .then((result) => {
    db = result
    console.log(result);
})
.catch((err) => {
    console.log(err);
});


//USER get ALL
app.get('/user/', function (req, res) {
    db.find({}).toArray()
        .then((result) => {
        console.log(result)
    res.json(result).end()
})
.catch((err) => {
        console.log(err)
    res.status(400).send(err).end()
})
})
//USER GET per ID
app.get('/user/:id', function (req, res) {
    db.findOne({'id': req.params.id})
        .then((result) => {
        console.log(result)
    res.json(result).end()
})
.catch((err) => {
        console.log(err)
    res.status(404).end()
})
})
//User Delete
app.delete('/user/:id', function (req, res) {
    db.deleteOne({'id': req.params.id})
        .then((result) => {
        console.log(result)
    res.status(204).end()
})
.catch((err) => {
        console.log(err)
    res.status(404).end()
})
})
//USER POST
app.post('/user/', (req, res) => {
    db.insertOne(req.body)
    .then((result) => {
    console.log(result)
res.status(201).json(req.body).end()
})
.catch((err) => {
    console.log(err)
res.status(400).send(err).end()
})
});








app.listen(3000, () => console.log("Listening on 3000"));*/