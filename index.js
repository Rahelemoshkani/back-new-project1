var express=require('express');
var app=express();
var mongo=require('mongodb');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/new-project1";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("new-project1");
    var myobj={name:"rahele",address:"arak"};
    dbo.collection("customers").insertOne(myobj,function(err,res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
});
});
    app.get('/',function(req,res){
    res.send('Hello world!');
});
app.listen(3000);