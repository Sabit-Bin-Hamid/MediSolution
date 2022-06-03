/**
 * require express app
 */
const express =require("express");
const app = express();

/**
 * setting up view engine
 */
app.set("view engine","ejs");

/**
 * setting middlewares
 */
app.use(express.static("./public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

/**
 * importing routers
 */
 const searchDoctorRoutes = require("./routers/searchDoctorRoutes.js");
 const searchHospitalRoutes = require("./routers/searchHospitalRoutes.js");
 const searchMedicineRoutes = require("./routers/searchMedicineRoutes.js");
 const paymentRoutes = require("./routers/paymentRoutes.js");
 const prescriptionRouter = require('./routers/prescriptionRouter.js');
 const reviewRouter = require('./routers/reviewRouter.js');
 const userRegRoutes = require("./routers/userRegRoutes.js")
 const docRegRoutes = require("./routers/docRegRoutes.js")

const loginRoutes = require("./routers/loginRoutes.js");
const homeRoutes = require("./routers/homeRoutes.js");
const appointmentRoutes = require("./routers/appointmentRoutes.js");
const viewAppointmentRoutes = require("./routers/viewAppointmentRoutes.js");

 


 
 
 
 
 
/**
 * using routers
 */
 app.use(searchDoctorRoutes);
 app.use(searchHospitalRoutes);
 app.use(searchMedicineRoutes);
 app.use(paymentRoutes);
 app.use(prescriptionRouter);
 app.use(reviewRouter);
 app.use(userRegRoutes);
 app.use(docRegRoutes);
 app.use(loginRoutes);
 app.use(homeRoutes);
 app.use(appointmentRoutes);
 app.use(viewAppointmentRoutes);

/**
 * error check
 */
app.use((req,res) =>{
    res.render("404.ejs")
})

app.listen(3000,()=>{
    console.log("the server is up at localhost:3000")
})
