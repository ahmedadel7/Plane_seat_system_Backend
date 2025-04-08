const {Schema,model}=require("mongoose")
//Complaints:customer_id,description,date,Ticket_id,email
const complaintSchema=new Schema({
description:{
    type:"String",
    required:true
},
date:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},
Ticket_id:{
    type:Schema.Types.ObjectId,
    ref:"tickets",
    required:true
},
userName:{
    type:"String",
    required:true
},

})
const ComplaintsModel=model("Complaint",complaintSchema);
module.exports=ComplaintsModel;