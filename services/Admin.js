const AdminModel=require("../Model/Admin")
const bcrypt = require('bcrypt');
module.exports.GetAllAdmins=async()=>{
    try {
        const Admin=await AdminModel.find();
        return Admin;

    } catch (error) {
        throw new Error("Could not retrive Admins")
    }
}
module.exports.AddAdmin=async(AdminInfo)=>{
    
    try {
        var hashedPassword = await bcrypt.hash(AdminInfo.password,12);
        const Admin=new AdminModel({
            username:AdminInfo.username,
            email:AdminInfo.email,
            password:hashedPassword,
            address:AdminInfo.address,
            DOB:AdminInfo.DOB,
            gender:AdminInfo.gender
      
        });
        const createdAdmin=await Admin.save();
        return createdAdmin;
    } catch (error) {
      error:error.message
        
    }
}