const {check}=require('express-validator');
module.exports.validatePostFeedback=()=>{
    const validationMiddleware=[
        check('description').notEmpty().withMessage('description cannot be empty'),
        check('date').notEmpty().withMessage('date cannot be empty'),
        check('email').isEmail().withMessage(' email is invalid'),
        
    ]
    return validationMiddleware;
}