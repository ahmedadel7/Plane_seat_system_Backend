const {Schema, model} = require('mongoose');

const ticketSchema = new Schema({
    date: { 
        type:'String',
        required : true,
    },
    departureTime: {
        type: 'String',
        required: true,
    },
    departureLocation: {
        type: 'String',
        required: true,
    },
    arrivalLocation: {
        type: 'String',
        required: true,
    },
    seatNumber: {
        type: 'String',
        required: true,
    },
    price: {
        type: 'String',
        required: true,
    },
    class: {
        type: 'String',
        required: true,
    },
    status: {
        type: 'String',
        required: true,
    },
    flightID: {
        type: 'String',
        required: true,
    },

});

const ticketModel = model('Ticket', ticketSchema);
module.exports = ticketModel;