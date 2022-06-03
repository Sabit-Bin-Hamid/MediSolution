/**
 * importing database connection
 */
const util = require("util");
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "medlink",
    connectionLimit: 10
});
/**
 * binding database for using async and await
 */
const query = util.promisify(db.query).bind(db);
/**
 * exports module
 */
module.exports = {
    query
}