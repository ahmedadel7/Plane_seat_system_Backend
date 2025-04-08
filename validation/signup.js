const {check}=require('express-validator');
module.exports.validatePostUser=()=>{
    const validationMiddleware=[
        check('name').notEmpty().withMessage('User name cannot be empty'),
        check('username').notEmpty().withMessage('User name cannot be empty'),
        check('email').isEmail().withMessage(' email is invalid'),
        check('Address').notEmpty().withMessage('User name cannot be empty'),
        check('DOB').notEmpty().withMessage('User name cannot be empty'),
        check('Gender').notEmpty().withMessage('User name cannot be empty'),
    ]
    return validationMiddleware;
}