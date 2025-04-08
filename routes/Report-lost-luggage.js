const { Router } = require("express");
const ReportValidation=require('../validation/Report')
const ReportController=require("../controller/Report-lost-luggage");
const ReportRouter = Router();
ReportRouter.get("/", ReportController.GetReport)
ReportRouter.post("/",ReportValidation.validatePostReport(),ReportController.MakeReport);
module.exports = ReportRouter;
