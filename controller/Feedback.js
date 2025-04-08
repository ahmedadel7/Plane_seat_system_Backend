const FeedbackServices=require("../services/Feedback");
const{validationResult}=require('express-validator')
module.exports.GetFeedback=async(req,res)=>{
    try {
        const Feedback=await FeedbackServices.GetAllFeedback();
        res.send({Feedback});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Feedback"
        });
    }
}
module.exports.MakeFeedback=async(req,res)=>{
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }
        const FeedbackInfo={
            description:req.body.description,
            date:req.body.date,
            email:req.body.email,
            
        }
        try {
            const SubmitFeedback=await FeedbackServices.MakeFeedback(FeedbackInfo);
            return res.status(201).send({
                msg:"Feedback created successfully",
                Feedback_id:SubmitFeedback._id
            })
        } catch (error) {
            return res.status(500).send({
                error:"Creation failed"
            })
        }
}