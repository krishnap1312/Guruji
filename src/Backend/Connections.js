var express = require("express");
var cors = require("cors");
var monodb = require("mongodb").MongoClient;

var connectString = "mongodb://127.0.0.1:27017"

var app = express()

app.use(cors())
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

app.get('/customerlist',(req,res)=>{
    monodb.connect(connectString)
    .then(obj=>{
        var database = obj.db("ReactPractice5-21")
        database.collection("CustomerData").find({}).toArray().then(documents =>{
            res.send(documents)
        })
    })
})

app.post("/registercustomer",(req,res)=>{
    var CustomerData = {
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Age : req.body.Age,
        ContactNumber : req.body.ContactNumber,
        Email : req.body.Email,
        PanNumber : req.body.PanNumber,
        AadharNumber : req.body.AadharNumber,
        City : req.body.City,
        State : req.body.State,
    }
    monodb.connect(connectString)
    .then(obj=>{
        var database = obj.db("ReactPractice5-21")
        database.collection("CustomerData").insertOne(CustomerData).then(()=>{
            console.log("Record Submitted Successfully")
            res.redirect("/UserLogin")
        })
    })
})

app.listen(5100);
console.log("Connmected")