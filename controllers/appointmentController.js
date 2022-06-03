const appointmentModel = require("../model/appointmentModel.js");
/**
 * 
 * @param {object} req - passing req data
 * @param {object} res - passing res data
 */


let appointment = async (req , res)=>
{

    
    let id = req.body.doc_id;
    let doctor_name = req.body.doc_name;
    let patient_name = req.body.patient_name;
    let date = req.body.booking_date;
    let query = await appointmentModel.appointment(id,doctor_name,date,patient_name);

    let data = {
      query
    }
     res.render("appointment.ejs", {data} );
   

    
}


 let homeAppointment = async (req,res)=>{
    
    //let searchQuery1 = req.body.doc_id;
    //let loginresult1 = await homeModel.getLogininfo(searchQuery1);
    //let searchQuery2 = req.body.doc_name;
    //let loginresult2 = await homeModel.getLogininfo(searchQuery2);
    let pageTitle = "Appointment";
    let data = {
        
        pageTitle,
        //loginresult1,
        //loginresult2
    }
    res.render("appointment.ejs",{data});
}

module.exports = {
    appointment,
    homeAppointment
}