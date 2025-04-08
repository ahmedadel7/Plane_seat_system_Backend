const { Router } = require("express");
const ComplainValidation=require("../validation/Complaint")
const ComplaintsController=require("../controller/Complaint");
const ComplaintRouter = Router();
ComplaintRouter.get("/", ComplaintsController.GetComplaints)
ComplaintRouter.post("/",ComplainValidation.validatePostComplaint(),ComplaintsController.MakeComplaint);

module.exports = ComplaintRouter;
