const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const AdminModel = require('../Model/Admin');
const CustomerModel=require("../Model/Customer")

module.exports.createUser = async (CustomerInfo) => {
  try {

    let hashedpassword = await bcrypt.hash(CustomerInfo.Password, 12);

    const newUser = new CustomerModel({
      name:CustomerInfo.name,
      username: CustomerInfo.username,
      email:CustomerInfo.email,
      Password: hashedpassword,
      Address:CustomerInfo.Address,
      DOB:CustomerInfo.DOB,
      Gender: CustomerInfo.Gender
    });

      await newUser.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports.doesUserExist = async (username,email) => {
  const existingUser = await CustomerModel.findOne({
    username: username,
    email:email

  });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
};
module.exports.doesEmailExist = async (email) => {
  const existingUser = await CustomerModel.findOne({
  
    email:email

  });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
};

module.exports.checkCredentialsA = async (username, password) => {
  try {
    // find user that has the same username
    const Admin = await AdminModel.findOne({
      username: username
    });

    // compare the plaintext password with the user's hashed password in the db.
    let isCorrectPassword = bcrypt.compare(password, Admin.password);

    if (isCorrectPassword) {
      return Admin;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error logging in, please try again later.');
  }
};
module.exports.checkCredentials = async (username, password) => {
  try {
    // find user that has the same username
    const Customer = await CustomerModel.findOne({
      username: username
    });

    // compare the plaintext password with the user's hashed password in the db.
    let isCorrectPassword = bcrypt.compare(password, Customer.Password);

    if (isCorrectPassword) {
      return Customer;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error logging in, please try again later.');
  }
};
module.exports.generateAJWT = (Admin) => {
  const jwtPayload = {
    AdminId: Admin._id,
    username: Admin.username,
    Type:"Admin"
    
    // if different users have different roles, you could put the role here too.
  };

  const jwtSecret = process.env.JWT_SECRET;

  try {
    let token = JWT.sign(jwtPayload, jwtSecret, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Failure to sign in, please try again later.');
  }
};
module.exports.generateCJWT = (Customer) => {
  const jwtPayload = {
    Customer_id: Customer._id,
    username: Customer.username,
    Type:"Customer"
    
    // if different users have different roles, you could put the role here too.
  };

  const jwtSecret = process.env.JWT_SECRET;

  try {
    let token = JWT.sign(jwtPayload, jwtSecret, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Failure to sign in, please try again later.');
  }
};

module.exports.auth = async (token) => {
  try {
    // verify the integrity of the token and extract its payload
    // it will throw an error by default if the token is invalid or had expired
    const tokenPayload = await JWT.verify(token, process.env.JWT_SECRET);
    // return the token payload as we might need it later in the controller
    return tokenPayload;
  } catch (error) {
    throw new Error('Unauthrozied.');
  }
};
