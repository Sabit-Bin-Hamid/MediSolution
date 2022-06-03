/**
 * connecting database
 */
const {query} = require("../helper/db.js");


/**
 * 
 * @param {string} name -search medicine
 * @returns medicine data
 */
let getMedicineData = async (name) =>{
    sqlCommand = `SELECT med_id, med_name, generic_name, alternative_brands, side_effects FROM medicine WHERE med_name LIKE "%${name}%" `;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}


/**
 * exports module
 */
module.exports = {
    getMedicineData,
    
}
