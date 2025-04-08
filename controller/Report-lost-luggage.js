const ReportServices=require("../services/Report-lost-luggage")
const{validationResult}=require('express-validator')
module.exports.GetReport=async(req,res)=>{
    try {
        const Report=await ReportServices.GetAllReports();
        res.send({Report});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Reports"
        });
    }
}
module.exports.MakeReport=async(req,res)=>{
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }
    try{
    const ReportInfo={
        name:req.body.name,
        email:req.body.email,
        luggage_description:req.body.luggage_description,
        Ticket_id:req.body.Ticket_id,
        flight_id:req.body.flight_id
    }
    const createdReport=await ReportServices.MakeReport(ReportInfo);
    return res.status(201).send({
        msg:"Created Report successfully",
        Report_id:createdReport._id
    })
}
    catch (error) {
        return res.status(500).send({
            error:"Creation Failed"
        })
    }
}