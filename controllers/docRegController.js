const docRegModel = require("../model/docRegModel.js");
/**
 * 
 * @param {object} req - passing datas as object
 * @param {object} res - getting and inputing res object
 */
let docReg = async (req , res)=>
{

    let email = req.body.demail;
    let name = req.body.dname;
    let phonenumber = req.body.dnumber;
    let address = req.body.daddress;
    let address2 = req.body.daddress2;
    let password = req.body.dpassword;
    let special = req.body.dspecialist;
    let query = await docRegModel.registerDocData(email, name, phonenumber, address,address2, password,special);

    let data = {
      query
    }
     res.render("docRegistration.ejs", {data} );
   

    
}
let homeDocReg = async (req , res)=>
{
    

  let pageTitle = "Doc Registration";
  
  let data = {
      pageTitle
      
  }
     res.render("DocRegistration.ejs", {data} );


    
}
module.exports =
{
  docReg,
  homeDocReg
}