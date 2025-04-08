const AdminServices=require("../services/Admin");
const AuthService=require("../services/auth")

module.exports.GetAdmins=async(req,res)=>{
    try {
        const Admin=await AdminServices.GetAllAdmins();
        res.send({Admin});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Admin"
        });
    }
}
module.exports.AddAdmin=async(req,res)=>{
    
        const AdminInfo={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            DOB:req.body.DOB,
            gender:req.body.gender

        }
        try {
            const AddAdmin=await AdminServices.AddAdmin(AdminInfo);
            return res.status(201).send({
                msg:"Admin created successfully",
                Admin_id:AddAdmin._id
            })
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
}
module.exports.postLogin = async (req, res) => {

    const { username, password } = req.body;
    try {
     
        const Admin = await AuthService.checkCredentialsA(username, password);
      if (!Admin) {
        return res.status(401).send({
          error:
            'Invalid credentials, please enter the correct username and password.'
        });
      }
  
      const jwt = await AuthService.generateAJWT(Admin);
      res.send({
        AdminId: Admin._id,
        username: Admin.username,
        type:"Admin",
        jwt: jwt,
        message: 'Logged in successfully.'
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };