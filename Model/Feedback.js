const {Schema,model}=require("mongoose")

const FeedbackSchema=new Schema({
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


})
const FeedbackModel=model("Feedback",FeedbackSchema);
module.exports=FeedbackModel;