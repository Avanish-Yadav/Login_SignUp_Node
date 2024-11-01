const mongoose=require('mongoose');
const connect=mongoose.connect('cluster url');

//check database connected or not 
connect.then(()=>{
    console.log("Database connected succesfully");
})
.catch(()=>{
    console.log("Database can not be connected");
});

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
//collection part
const collection=new mongoose.model("users",LoginSchema);
module.exports=collection;
