//connecting database
const {query} = require("../helper/db.js");
/**
 * 
 * @param {string} email - passing and checking email data
 * @param {string} name - passing and checking name data
 * @param {number} phonenumber - passing and checking number of doctor
 * @param {string} address - passing and checking address of doctor chamber
 * @param {string} address2 - passing and checking second address of doctor chamber
 * @param {varchar} password - passing and checking passoword
 * @param {string} special - passing and checking specialisation
 */
let registerDocData = async (email, name, phonenumber, address,address2, password, special) =>{
    sqlCommand=  `INSERT INTO doc_info( doc_name, password, email, subject, chamber1,chamber2) VALUES ('${email}','${name}','${phonenumber}','${address}','${address2}','${email}');`;
    console.log(password)
   let result = await query(sqlCommand);
   if(result)
   {
       console.log("successfully registered");
   }
}

module.exports = {
    registerDocData
    
}