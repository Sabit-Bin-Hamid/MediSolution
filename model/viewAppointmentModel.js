//connecting database
const {query} = require("../helper/db.js");

/**
 * 
 * @param {number} id - passing and checking doctor id
 * @returns 
 */

let getAppointmentData = async (id) =>{
    sqlCommand = `SELECT patient_name, appointment_date FROM appointment WHERE doctor_id = ${id}  `;
     
    let result = await query(sqlCommand);
    
    return result; 

}



module.exports = {
    getAppointmentData,
    
}
