//connecting database
const {query} = require("../helper/db.js");
/**
 * 
 * @param {string} email - checking and inserting email info
 * @param {string} name - checking and inserting name
 * @param {number} phonenumber - checking and inserting phone number
 * @param {number} nid - checking and inserting nid
 * @param {date} bday - checking and inserting birth date
 * @param {string} address - checking and inserting address
 * @param {varchar} password - checking and inserting password
 */
let registerUserData = async (email, name, phonenumber, nid, bday, address, password) =>{
   sqlCommand=  `INSERT INTO user_info( name, password, email, bday, address) VALUES ('${name}','${password}','${email}','${bday}','${address}');`;
   
   let result = await query(sqlCommand);
   if(result)
   {
       console.log("successfully registed");
   }
}

module.exports = {
    registerUserData
    
}