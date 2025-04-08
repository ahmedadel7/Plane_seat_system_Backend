const ReportModel=require("../Model/Report-lost-luggage")
const {ObjectId}=require("mongoose").Types;
module.exports.GetAllReports=async()=>{
    try {
        const Report=await ReportModel.find();
        return Report;

    } catch (error) {
        throw new Error("Could not retrive Reports")
    }
}
module.exports.MakeReport=async(ReportInfo)=>{
    try {
        const Report=new ReportModel({
            name:ReportInfo.name,
            email:ReportInfo.email,
            luggage_description:ReportInfo.luggage_description,
            ticket_id:new ObjectId(ReportInfo.ticket_id),
            flight_id:new ObjectId(ReportInfo.flight_id)
        })
        const createdReport=await Report.save();
        return createdReport;
    } catch (error) {
        throw new Error("could not add Report");
        
    }
}