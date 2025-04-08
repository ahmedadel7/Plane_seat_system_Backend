const { Router } = require("express");
const goflightlabs = require("../controller/goflightlabs");
const goflightlabsRouter = Router();
goflightlabsRouter.post("/", goflightlabs.goflightlabs)
module.exports = goflightlabsRouter;
