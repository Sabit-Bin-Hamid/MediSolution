/**
 * Import db.js module and getting query export from db.js
 * and Connecting to database.
 */
const {query} = require('../helper/db.js')

/**
 * This function will insert  Prescription details in database given by doctor.
 * @param {string} patientName -  Insert patient name in database
 * @param {int} patientId -  Insert patientId in database
 * @param {string} consultationDate - Target is insert consultationDate insert in database
 * @param {string} prescription - Target is insert patient prescription in database
 * @returns {string}  Result is patiet name, id, date and prescription
 */
let insertPrescription = async (patientName,patientId,consultationDate,prescription) => {
    let sqlCommand = `INSERT INTO prescription(patient_name, patient_id,consultation_date,prescription)
                   VALUES ('${patientName}','${patientId}','${consultationDate}','${prescription}');`;
    let result = await query(sqlCommand);
    return result;
}

/**
 * This function select or fetch data from database prescription table according to user id.
 * @param {string} userid - target is user get prescriptin according this id 
 * @returns {string} result is user id
 */
let getPrescription = async (userid) => {
    console.log('user id'+userid)
    let sqlCommand = `SELECT patient_name,patient_id,consultation_date,
                     prescription FROM prescription WHERE patient_id='${userid}';`;
    let result = await query(sqlCommand);
    console.log(result)
    return result
}

/**
 * Export insertPrescription and getPrescription function.
 * Make this function public
 */
module.exports = {
    insertPrescription,
    getPrescription,
}