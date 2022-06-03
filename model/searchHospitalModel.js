/**
 * connecting database
 */
const {query} = require("../helper/db.js");

/**
 * 
 * @param {string} name -search hospital
 * @returns hospital data
 */

let getHospitalData = async (name) =>{
    sqlCommand = `SELECT hospital_id, name, address FROM hospital WHERE name LIKE "%${name}%" `;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}


/**
 * exports module
 */
module.exports = {
    getHospitalData,
    
}
