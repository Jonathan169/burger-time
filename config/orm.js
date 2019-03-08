var connection=require("./connection.js");

var orm={
    viewAll(table,cb){
        var query="select * from " + table + ";"
        connection.query(query,function(err,data){
            if (err) throw err;
            console.log(data)
            cb(data)
        })
    },
    createBurger(table,name,cb){
        var query="INSERT INTO ?? (burger_name) Values(?);"
        connection.query(query,[table,name]),function(err,data){
            console.log(data)
            cb(data)
            return data
        }
    },
    //can i put an array?
    updateOne(table,ate,id,cb){
        var query="UPDATE ?? SET ate=? WHERE id=? ;"
        connection.query(query,[table,ate,id]),function(err,data){
            console.log(data)
            cb(data)
        }
    }
}
module.exports=orm;