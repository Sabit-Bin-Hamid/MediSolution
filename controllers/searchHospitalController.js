/**
 * including model
 */
const searchHospitalModel = require("../model/searchHospitalModel.js");

/**
 * 
 * @param {object} req -passing req data
 * @param {object} res -passing res data
 */
let searchHospital = async (req , res)=>
{
    console.log(req.body);
    
    let searchQuery = req.body.q;
    let searchresult = await searchHospitalModel.getHospitalData(searchQuery);
    let pageTitle = "Hospital Search";
    let title ="Hospital's List"
    let data = {
      pageTitle,
      title,
      searchresult
    };
    res.render("hospitalsearch.ejs" , { data });
}

/**
 * 
 * @param {object} req -passing obj data
 * @param {object} res -passing obj data
 */
let homeHospital =  (req, res) =>{
  // let names = ["Mahin", "Alvi", "User1"];

  //let lines = await basicModel.getLines();

  let pageTitle = "Hospital Search";
  let title ="Hospital's List"
  let data = {
      pageTitle,
      title 
  }
  res.render("hospitalsearch.ejs", {data});
}

/**
 * exports module
 */
module.exports =
{
  searchHospital,
  homeHospital 
}