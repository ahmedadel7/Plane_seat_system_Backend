const FlightModel=require("../Model/Flight");
module.exports.findAllFlights=async()=>{
    try {
        const Flight=await FlightModel.find();
        return Flight;

    } catch (error) {
        throw new Error("Could not retrive Flights")
    }
}
module.exports.AddFlight=async(FlightInfo)=>{
    try {
        const Flight=new FlightModel({
            Date:FlightInfo.Date,
            Departure_Time:FlightInfo.Departure_Time,
            Departure_loc:FlightInfo.Departure_loc,
            Arrival_loc:FlightInfo.Arrival_loc,
            Plane_No:FlightInfo.Plane_No
        })
        const createdFlight=await Flight.save();
        return createdFlight;
    } catch (error) {
        throw new Error("could not add Flight");
        
    }
}
module.exports.GetFlightbyID=async(flight_id)=>{
    try {
        const flight= await FlightModel.findById(flight_id).populate('_id')
        return flight
    } catch (error) {
        throw new Error("could not find flight")
    }
}

module.exports.UpdateFlight=async(flight_id,FlightInfo)=>{
    try {
       
        const UpdatedFlight=await FlightModel.findByIdAndUpdate(flight_id,FlightInfo)  ;
        return UpdatedFlight;
    } catch (error) {
        throw new Error("could not update Flight");
        
    }
}
