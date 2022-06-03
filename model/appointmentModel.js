//connecting database
const {query} = require("../helper/db.js");
/**
 * 
 * @param {id number} id - passing doc id
 * @param {string} doctor_name - passing doctor name
 * @param {date} date - passing appointment date
 * @param {string} patient_name - passing patient name
 */
let appointment = async (id,doctor_name,date,patient_name) =>{
    
    sqlCommand=  `INSERT INTO appointment( doctor_id, doctor_name, appointment_date, patient_name) VALUES ('${id}','${doctor_name}','${date}','${patient_name}');`;
   
   let result = await query(sqlCommand);
   if(result)
   {
       console.log("successfully registered");
   }
}


module.exports = {
    appointment
    
}