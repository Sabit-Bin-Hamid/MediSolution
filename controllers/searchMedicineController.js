/**
 * including model
 */
const searchMedicineModel = require("../model/searchMedicineModel.js");

/**
 * 
 * @param {object} req -passing obj data
 * @param {object} res -passing obj data
 */
let searchMedicine = async (req , res)=>
{
    console.log(req.body);
    
    let searchQuery = req.body.q;
    let searchresult = await searchMedicineModel.getMedicineData(searchQuery);
    let pageTitle = "Medicine Search";
    let title ="Medicine's List"
    let data = {
      pageTitle,
      title,
      searchresult
    };
    res.render("searchMedicine.ejs" , { data });
}

/**
 * 
 * @param {object} req -passing req data
 * @param {object} res -passing res data
 */
let homeMedicine =  (req, res) =>{
  // let names = ["Mahin", "Alvi", "User1"];

  //let lines = await basicModel.getLines();

  let pageTitle = "Medicine Search";
  let title ="Medicine's List"
  let data = {
      pageTitle,
      title 
  }
  res.render("searchMedicine.ejs", {data});
}

/**
 * exports module
 */
module.exports =
{
  searchMedicine,
  homeMedicine 
}