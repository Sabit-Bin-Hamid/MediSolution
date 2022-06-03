/**
 * connecting database
 */
const {query} = require("../helper/db.js");

/**
 * 
 * @param {string} name -search doctor
 * @returns doctor data
 */

let getDoctorData = async (name) =>{
    sqlCommand = `SELECT doc_id, doc_name, subject, chamber1, chamber2 FROM doc_info WHERE doc_name LIKE "%${name}%" `;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}


/**
 * exports module
 */
module.exports = {
    getDoctorData,
    
}
