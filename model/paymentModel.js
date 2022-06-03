/**
 * connecting database
 */
let { query } = require("../helper/db.js");

/**
 * 
 * @param {int} ID -connecting with user
 * @returns select user data
 */
let getUserInfo = async (ID) =>{
    let sqlCommand = `SELECT user_id, name, email FROM user_info WHERE user_id = ${ID};`
    let result = await query(sqlCommand);
    return result;
}

/**
 * 
 * @param {int} ID -connecting with user
 * @returns select currency data
 */
let getCurrency = async (ID) =>{
    let sqlCommand = `SELECT currency FROM user_info WHERE user_id = ${ID};`
    let result = await query(sqlCommand);

    return parseInt(result[0].currency, 10);
}

/**
 * 
 * @param {int} ID -connecting with user
 * @param {int} amount -updating currency
 * @returns update currency data
 */
let updateCurrency = async (ID, amount) =>{
    let sqlCommand = `UPDATE user_info SET currency = ${amount} WHERE user_id = ${ID};`
    let result = await query(sqlCommand);

    return result;
}


/**
 * exports module
 */
module.exports = {
    getUserInfo,
    getCurrency,
    updateCurrency
}