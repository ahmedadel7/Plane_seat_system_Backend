const { token } = require("morgan");
const ComplaintsModel=require("../Model/Complaint");
const {ObjectId}=require("mongoose").Types;
const axios = require('axios');

module.exports.GetAllComplaints=async()=>{
    try {
       
        const Complaint=await ComplaintsModel.find();
        return Complaint;
        
    } catch (error) {
        throw new Error("Could not retrive Complaint")
    }
}
module.exports.MakeComplaint=async(ComplaintInfo)=>{
    try {
        const Complaint=new ComplaintsModel({
            description:ComplaintInfo.description,
            date:ComplaintInfo.date,
            email:ComplaintInfo.email,
            Ticket_id: ComplaintInfo.Ticket_id,
            userName:ComplaintInfo.userName
      
        });
        // const addprop = await ComplaintsModel.findByIdAndUpdate({_id:Complaint._id}, {$push:{Complaint:Complaint._id}});
        const confirmation = await Complaint.save();
        const data= {
            description: ComplaintInfo.description,
            date: ComplaintInfo.date,
            email: confirmation.email,
            email: ComplaintInfo.email,
            Ticket_id: ComplaintInfo.Ticket_id,
            userName: ComplaintInfo.userName
        }
        axios.post(process.env.CONFERMATION ,data);

        const createdComplaint=await Complaint.save();
        return createdComplaint;
    } catch (error) {
        console.log(error);
    }
}