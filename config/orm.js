var connection=require("./connection.js");

var orm={
    viewAll:function(table,cb){
        var query="select * from " + table + ";"
        connection.query(query,function(err,data){
            if (err) throw err;
            console.log(data)
            cb(data)
        })
    },
    createBurger:function(table,name,cb){
        var query="INSERT INTO ?? (burger_name) Values(?);"
        connection.query(query,[table,name],function(err,data){
            console.log(data)
            cb(data)
            return data
        })
    },
    //can i put an array?
    updateOne:function(table,ate,id,cb){
        console.log("hi")
        connection.query("UPDATE ?? SET ate=? WHERE id=? ;",[table,ate,id],function(err,data){
            if(err)throw err
            console.log("db response: ")
            console.log(data)
            cb(data)
        })
    }
}
module.exports=orm;