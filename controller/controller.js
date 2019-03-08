var burgers=require("../model/model")
var express = require("express");
var router=express.Router();

router.get("/",function(req,res){
    burgers.viewAll(function(data){
        res.render("index",{burgers:data})
    })      
})
router.post("/add",function(req,res){
    var name=req.params.name;
    burgers.createBurger(name,function(data){
        res.render("index",{burgers:data})
    })
})
router.put("/update/:id",function(req,res){
    var id= req.params.id;
    var ate=Boolean(req.body.ate);

    console.log("updating.." + id+ate)
    burgers.updateOne(ate,id,function(data){
        res.render("index",{burgers:data})
    })
})
module.exports=router;