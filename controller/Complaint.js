const { isError } = require("joi");
const { Error, MongooseError } = require("mongoose");
const ComplaintsServices=require("../services/Complaint");
const{validationResult}=require('express-validator')
module.exports.GetComplaints=async(req,res)=>{
    try {
        const Complaint=await ComplaintsServices.GetAllComplaints();
        res.send({Complaint});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Complaints"
        });
    }
}
module.exports.MakeComplaint=async(req,res)=>{
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }
        const ComplaintInfo={
            description:req.body.description,
            date:req.body.date,
            email:req.body.email,
            Ticket_id:req.body.Ticket_id,
            userName:req.body.userName
        }
        console.log(ComplaintInfo);
        try {
            const SubmitComplaint=await ComplaintsServices.MakeComplaint(ComplaintInfo);
            return res.status(201).send({
                msg:"Complaint created successfully",
                Complaint_id:SubmitComplaint._id
            })
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
}