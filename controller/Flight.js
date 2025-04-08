const FlightServices=require("../services/Flight")
module.exports.getFlights=async(req,res)=>{
    try {
        const Flight=await FlightServices.findAllFlights();
        res.send({Flight});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Flights"
        });
    }
}
module.exports.getFlightsByID=async(req,res)=>{
    const flight_id=req.params.flight_id;
    try {
        const Flight=await FlightServices.GetFlightbyID(flight_id)
        if(!Flight){
                return res.status(404).send({
                error:"Flight not Found"
            });
        }
        return res.send({
            flight:Flight
        })
    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Flights"
        });
    }
}
module.exports.AddFlights=async(req,res)=>{
const FlightInfo={
    Date:req.body.Date,
    Departure_Time:req.body.Departure_Time,
    Departure_loc:req.body.Departure_loc,
    Arrival_loc:req.body.Arrival_loc,
     Plane_No:req.body.Plane_No
}
try {
    const createdFlight=await FlightServices.AddFlight(FlightInfo);
    return res.status(201).send({
        msg:"Flight created successfully",
        flight_id:createdFlight._id
    })
} catch (error) {
    return res.status(500).send({
        error:"Creation failed"
    })
}
}
module.exports.UpdateFlight=async(req,res)=>{
    const flight_id=req.params.flight_id
   
    try {
        const Flight=await FlightServices.GetFlightbyID(flight_id)
        if(!Flight){
            return res.status(404).send({
                error:"Flight not Found"
            });
        }
        const FlightInfo={
            Date:req.body.Date,
            Departure_Time:req.body.Departure_Time,
          
        }
        const UpdatedFlight=await FlightServices.UpdateFlight(flight_id,FlightInfo);
        return res.status(201).send({
            msg:"Flight updated successfully",
            flight_id:UpdatedFlight._id
        })

    } catch (error) {   
        return res.status(500).send({
            error:"Update failed"
        })
        
    }
}