const {Schema,model}=require("mongoose");
const ReportSchema=new Schema({
    
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    luggage_description:{
        type:"String",
        required:true
    },
    ticket_id:{
        type:Schema.Types.ObjectId,
        ref:"tickets",
        required:true
    },
    flight_id:{
        type:Schema.Types.ObjectId,
        ref:"flights",
        required:true
    }
    
})
const ReportModel=model("Report",ReportSchema)
module.exports=ReportModel;
