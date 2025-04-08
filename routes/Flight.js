const { Router } = require("express");
const FlightController = require("../controller/Flight");
const FlightValiation=require("../validation/AddFlight")
const FlightRouter = Router();
FlightRouter.get("/", FlightController.getFlights)
FlightRouter.get("/:flight_id", FlightController.getFlightsByID)
FlightRouter.post("/",FlightValiation.validatePostFlight(),FlightController.AddFlights)
FlightRouter.put("/:flight_id",FlightController.UpdateFlight)
module.exports = FlightRouter;
