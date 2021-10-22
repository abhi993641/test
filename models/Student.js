const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let schema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
});

//module.exports=mongoose.model("Student",schema);

module.exports=mongoose.model("Student",schema);