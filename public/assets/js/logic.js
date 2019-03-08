$(".butt").on("click",function(){
    var id=$(this).data("id")
    var ate=$(this).attr("data-state")
    if($(this).attr("data-state")==="true"){
      ate=true
    }
    else if($(this).attr("data-state")==="false"){
      ate=false;
    }
    var data={
      id:id,
      ate:ate
    }
    console.log(data)
    $.ajax("/update/"+id,{
      method:"put",
      data:data
    }).then(function(req,res){
      console.log("updated")
      console.log(res)
      location.assign("/")
    }).catch(function(err){
      if(err)throw err
    })
  })
  $("#sub").on("click",function(){
    var name=$("#burger").val().trim()
    if(name!==""||name!==" "){
    var data={
      name:name
    }
    $.ajax("/api/burger",{
      method:"POST",
      data:data
    }).then(function(req,res){
      console.log("added "+res)
      location.assign("/")
    })
    }
    else{
      alert("please fill out burger name before submiting")
    }
  })