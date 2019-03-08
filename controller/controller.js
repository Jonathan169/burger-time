var burgers=require("../model/model")
var express = require("express");
var router=express.Router();
router.get("/",function(req,res){
    burgers.viewAll(function(data){
        res.render("index",{burgers:data})
    })
})
router.post("/api/burger",function(req,res){
    var name=req.body.name;
    burgers.createBurger(name,function(data){
        console.log("added")
        res.json(data)
    })
})
router.put("/update/:id",function(req,res){
    var id= req.params.id;
    var ate=parseInt(req.body.ate);
    console.log("updating.." + id+ate)
    burgers.updateOne(ate,id,function(data){
        console.log(data);
        res.json(data)
    })
})
module.exports=router;