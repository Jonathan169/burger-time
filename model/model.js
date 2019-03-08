var orm=require("../config/orm")

const burgers={
    viewAll: function(cb){
        orm.viewAll("burgers",function(data){
            cb(data)
        })
    },
    createBurger:function(arr,cb){
        orm.createBurger("burgers",arr,function(data){
            cb(data)
        })
    },
    updateOne:function(ate,id,cb){
        orm.updateOne("burgers",ate,id,function(data){
            cb(data)
        })
    }
}
module.exports=burgers;