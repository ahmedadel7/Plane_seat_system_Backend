const {Schema,model}=require("mongoose")
//name, email,password,Address,DOB,gender
const AdminSchema=new Schema({
    username:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    address:{
        type:"String",
        required:true
    },
    DOB:{
        type:"String",
        required:true
    },
    gender:{
        type:"String",
        required:true
    }
})
const AdminModel=model("Admin",AdminSchema);
module.exports=AdminModel;