const ticketSerive = require('../services/ticketServer');

module.exports.getTickets = async (request, response) => {
    try {
        const Ticket = await ticketSerive.findAllTickets();
        response.send({Ticket}); 
    } catch (error) {
        response.status(500);
        response.send({
            error: "Can't find tickets"
        });
    }
}
module.exports.getTicket = async (request, response) => {
    try {
        const ticket = await ticketSerive.findTicket(request.params.ticketId);
        if(!ticket){
            response.status(404);
            response.send({
                error: "Ticket not found"
            });
        }
        return response.send({
            ticket,
        });
    } catch (error) {
        response.status(500).send(
            {
                error:error.message,
            }
        );
    }
}

module.exports.bookTicket = async (request, response) => {
    try {
        const ticketId = request.params.id;
        // const ticketInfo ={
        //    status: request.body.status,
        // }
        const ticket = await ticketSerive.findTicket(ticketId);
        // if(ticket._id != ticketId){
        //     response.status(404);
        //     response.send({
        //         error: "Ticket not found"
        //     });
        // }else{
            const ticketInfo = {
                date: ticket.date,
                departureTime: ticket.departureTime,
                departureLocation: ticket.departureLocation,
                arrivalLocation: ticket.arrivalLocation,
                seatNumber: ticket.seatNumber,
                price: ticket.price,
                class: ticket.class,               
                status: "Booked",
                flightID: ticket.flightID,
            };
            const ticektBooked = await ticketSerive.editTicket(ticket._id, ticketInfo);
            response.status(201).send({
                ticektBooked,
                message: "Ticket booked successfully"
            });
        // }
    } catch (error) {
        response.status(500);
             response.send({
                  error: error.message,
             });
    }
}

module.exports.upgradeTicket = async (request, response) => {
    try {
        const ticket = await ticketSerive.findTicket(request.params.id);

        const ticketInfo = {
            date: ticket.date,
            departureTime: ticket.departureTime,
            departureLocation: ticket.departureLocation,
            arrivalLocation: ticket.arrivalLocation,
            seatNumber: ticket.seatNumber,
            price: ticket.price,
            class: "Business",               
            status: ticket.status,
            flightID: ticket.flightID,
        };
        const ticketUpgraded = await ticketSerive.editTicket(ticket._id, ticketInfo);
        return response.status(201).send({
            ticketUpgraded,
            message: 'Ticket upgraded successfully',
        });
       } catch (error) {
             response.status(500);
             response.send({
                  error: error.message,
             });
       }

};

module.exports.editTicket = async (request, response) => {
   try {
    const ticket = await ticketSerive.findTicket(request.params.id);
    const ticketInfo = {
        date: request.body.date,
        departureTime: request.body.departureTime,
    }
    const ticketEdited = await ticketSerive.editTicket(ticket._id, ticketInfo);
    return response.status(201).send({
        ticketEdited,
        message: 'Ticket edited successfully',
    });
   } catch (error) {
         response.status(500);
         response.send({
              error: error.message,
         });
   }
};

module.exports.cancelBooking = async (request, response) => {
    try {
        const ticket = await ticketSerive.findTicket(request.params.id);
        const ticketInfo = {
            date: ticket.date,
            departureTime: ticket.departureTime,
            departureLocation: ticket.departureLocation,
            arrivalLocation: ticket.arrivalLocation,
            seatNumber: ticket.seatNumber,
            price: ticket.price,
            class: ticket.class,               
            status: "Available",
            flightID: ticket.flightID,
        };
        const ticketCanceled = await ticketSerive.editTicket(ticket._id, ticketInfo);
        return response.status(201).send({
            ticketCanceled,
            message: 'Ticket canceled successfully',
        });
       } catch (error) {
             response.status(500);
             response.send({
                  error: error.message,
             });
       }
}