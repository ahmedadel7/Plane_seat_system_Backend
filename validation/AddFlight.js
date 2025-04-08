const {check}=require('express-validator');
module.exports.validatePostFlight=()=>{
    const validationMiddleware=[
        check('Date').notEmpty().withMessage('Date cannot be empty'),
        check('Departure_Time').notEmpty().withMessage('Departure_Time cannot be empty'),
        check('Departure_loc').notEmpty().withMessage('Departure_loc cannot be empty'),
        check('Arrival_loc').notEmpty().withMessage('Arrival_loc cannot be empty'),
        check('Plane_No').notEmpty().withMessage('Plane_No cannot be empty'),
        
    ]
    return validationMiddleware;
}