const {check}=require('express-validator');
module.exports.validatePostReport=()=>{
    const validationMiddleware=[
        check('name').notEmpty().withMessage('name cannot be empty'),
       
        check('email').isEmail().withMessage(' email is invalid'),
        check('luggage_description').notEmpty().withMessage('date cannot be empty'),
        
    ]
    return validationMiddleware;
}