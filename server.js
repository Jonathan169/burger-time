var express=require("express");
var handle=require("express-handlebars");
var mysql=require("mysql");
var port=3000;
var app=express();
var connection;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine("handlebars", handle("main"));
app.set("view engine","handlebars")
app.use(express.static("public"))
if(process.env.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL)
}
else{
    connection=mysql.createConnection({
        host:'localhost',
        port:8889,
        user:"root",
        password:"root",
        database:"burger_db"
    })
}
connection.connect(function(){
    console.log("Connection ID: "+connection.threadId)
})



app.listen(port,function(){
    console.log("listening on http://localhost:"+port)
})