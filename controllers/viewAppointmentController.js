const viewAppointmentModel = require("../model/viewAppointmentModel.js");

/**
 * 
 * @param {object} req - passing and checking object at req data
 * @param {object} res - passing and checking object as res data
 */
let appointmentView = async (req , res)=>
{
    console.log(req.body);
    
    let searchQuery = req.body.q;
    let searchresult = await viewAppointmentModel.getAppointmentData(searchQuery);
    let pageTitle = "Appointment Search";
    let title ="Appointment  List"
    let data = {
      pageTitle,
      title,
      searchresult
    };
    res.render("viewAppointment.ejs" , { data });
}

let homeView =  (req, res) =>{
  // let names = ["Mahin", "Alvi", "User1"];

  //let lines = await basicModel.getLines();

  let pageTitle = "Appointment Search";
  let title ="Appointment  List"
  let data = {
      pageTitle,
      title 
  }
  res.render("viewAppointment.ejs", {data});
}

module.exports =
{
  appointmentView,
  homeView
}