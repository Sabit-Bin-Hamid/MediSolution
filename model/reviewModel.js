//connecting database

const {query} = require('../helper/db.js')

/**
 * 
 * @param {string} Name -- inserting Name
 * @param {string} Email -- inserting Email
 * @param {string} Review -- inserting Review
 * @returns -- checking ReviewInfo
 */
let insertReview = async (Name,Email,Review) =>{
    sqlCommand = `INSERT INTO blog(Name, Email, Review) VALUES ('${Name}','${Email}','${Review}')`;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 
}
let getLines = async () => {
    let sqlCommand =`SELECT Name, Email, Review FROM blog`;
    let result = await query(sqlCommand);
    console.log(result)
    return result;
}




module.exports = {
    insertReview,
    getLines
}