const userRegModel = require("../model/userRegModel.js");
/**
 * 
 * @param {object} req - passing req datas
 * @param {object} res - passing res datas
 */
let userReg = async (req , res)=>
{
  
    let email = req.body.uemail;
    let name = req.body.uname;
    let phonenumber = req.body.uphone;
    let nid= req.body.unid;
    let bday = req.body.ubirth;
    let address = req.body.uaddress;
    let password = req.body.password;
    let query = await userRegModel.registerUserData(email, name, phonenumber, nid, bday, address, password);

    let data = {
      query
    }
     res.render("userRegistration.ejs", {data} );


    
}
let homeUserReg = async (req , res)=>
{
    

  let pageTitle = "User Registration";
  
  let data = {
      pageTitle
      
  }
     res.render("userRegistration.ejs", {data} );


    
}

module.exports =
{
  userReg,
  homeUserReg
}