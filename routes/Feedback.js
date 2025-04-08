const { Router } = require("express");
const feedbackValidation=require("../validation/Feedback")
const FeedbackController=require("../controller/Feedback");
const FeedbackRouter = Router();
FeedbackRouter.get("/", FeedbackController.GetFeedback)
FeedbackRouter.post("/",feedbackValidation.validatePostFeedback(),FeedbackController.MakeFeedback);
module.exports = FeedbackRouter;
