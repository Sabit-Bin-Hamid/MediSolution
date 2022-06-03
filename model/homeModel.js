//connecting database
const {query} = require("../helper/db.js");
/**
 * 
 * @param {string} val - checking logininfo
 * @returns login info
 */
/**
 * 
 * @param {string} val - checking logininfo
 * @returns result
 */
let getLogininfo1  = async (val) =>{
    let sqlCommand = `SELECT email,password FROM user_info WHERE email LIKE "%${val}%" `;
    
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}

let getLogininfo2  = async (val) =>{
    let sqlCommand = `SELECT email,password FROM doc_info WHERE email LIKE "%${val}%" `;
    
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}

module.exports = {
    getLogininfo1,
    getLogininfo2
    
} 