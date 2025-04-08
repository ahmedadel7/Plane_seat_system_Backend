const AuthService = require('../services/auth');
const{validationResult}=require('express-validator')
module.exports.Signup = async (req, res) => {
  const validationErrors = validationResult(req).array();
  if (validationErrors.length > 0) {
    const firstError = validationErrors[0];
    return res.status(422).send({
      error: firstError.msg
    });
  }
  try {
    const CustomerInfo = {
      name: req.body.name,
      username: req.body.username,
      email:req.body.email,
      Password: req.body.Password,
      Address:req.body.Address,
      DOB:req.body.DOB,
      Gender:req.body.Gender
      
    };

    const CutomerExists = await AuthService.doesUserExist(CustomerInfo.username);
    if (CutomerExists) {
      return res.status(422).send({
        error: 'A user with the same username already exists.'
      });
    }
    const CutomerExists1 = await AuthService.doesEmailExist(CustomerInfo.username);
    if (CutomerExists1) {
      return res.status(422).send({
        error: 'A user with the same username already exists.'
      });
    }

    const AddCustomer=await AuthService.createUser(CustomerInfo);
    return res.status(201).send({
      msg:"Customer created successfully",
      Customer_id:AddCustomer._id
  })
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
};
module.exports.postLogin = async (req, res) => {

  const { username, password } = req.body;
  try {
    const Customer = await AuthService.checkCredentials(username, password);

    if (!Customer) {
      return res.status(401).send({
        error:
          'Invalid credentials, please enter the correct username and password.'
      });
    }

    const jwt = await AuthService.generateCJWT(Customer);
    res.send({
      Customer: Customer._id,
      username: Customer.username,
      type:"Customer",
      jwt: jwt,
      message: 'Logged in successfully.'
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
};

