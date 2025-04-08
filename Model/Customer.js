const {Schema,model}=require("mongoose")

const customerSchema=new Schema({
name:{
    type:"String",
    required:true
},
username:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},
Password:{
    type:"String",
    required:true
},
Address:{
    type:"String",
    required:true
},
DOB:{
    type:"String",
    required:true
},
Gender:{
    type:"String",
    required:true
}

})
const CustomerModel=model("Customer",customerSchema);
module.exports=CustomerModel;