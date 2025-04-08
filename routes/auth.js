const { Router } = require('express');
const CustomerValidation=require("../validation/signup")

const authController = require('../controller/auth');

const authRouter = Router();

authRouter.post('/signin' ,authController.postLogin);

authRouter.post('/signup',CustomerValidation.validatePostUser() ,authController.Signup);

module.exports = authRouter;