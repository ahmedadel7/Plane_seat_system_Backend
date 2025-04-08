const {Schema,model}=require("mongoose");

const FlightSchema=new Schema({
    Date:{
        type:"String",
        required:true
    },
    Departure_Time:{
        type:"String",
        required:true
    },

    Departure_loc:{
        type:"String",
        required:true
    },

    Arrival_loc:{
        type:"String",
        required:true
    },

    Plane_No:{
        type:"Number",
        required:true
    }
});
const FlightModel=model("Flight",FlightSchema)
module.exports=FlightModel;